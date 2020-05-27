<template>
  <div :class="mapCursor">
    <v-header class="header-box"></v-header>
    <div id="map" class="group-box" :class="clickState"></div>
    <!--企业信息弹窗 隐藏做地图 调试用a-->
    <div v-show="false">
      <v-popover :propComInfo="propComInfo" ref="popOver"></v-popover>
    </div>
  </div>
</template>
<script>
import VHeader from "~/components/header/groupHeader.vue";
import VPopover from "~/components/group/popOver.vue";
import mapConfig from "~/assets/json/group/map.json";
export default {
  layout: "group",
  middleware: "authCheck",
  components: {
    VHeader,
    VPopover
  },
  data() {
    return {
      // 运营中心code
      subCenterCodeArr: [],
      // 企业code
      unitInfoArr: [],
      // 地图
      g2map: {},
      mapCursor: "cur-default",
      clickState: "click-auto",
      // 元素图层
      elementLayer: {},
      // 详情图层
      toolTipWare: {},
      // 双色调主题
      themeLayer: Boolean,
      baseLayer: {},
      baseLayerDeep: {},
      // 弹出框企业数据 调试用a
      propComInfo: {}
    };
  },
  watch: {
    themeLayer(val) {
      if (val) {
        this.baseLayer.setVisible(true);
        this.baseLayerDeep.setVisible(false);
      } else {
        this.baseLayer.setVisible(false);
        this.baseLayerDeep.setVisible(true);
      }
    }
  },
  methods: {
    // 企业状态样式
    getElementSymbol(state) {
      var source =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAyCAYAAAA5kQlZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RTBCODdFQjU0OUVFMzExOTI1OUQ2MzcwRjVBMzk5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjAzRDQ3MThCM0ExMUU4QUMzRDkyRDY5QTVCNUQzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjAzRDQ3MDhCM0ExMUU4QUMzRDkyRDY5QTVCNUQzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiN2M5Yjc1ZC03OWYzLTVhNDMtYTQ0Ni1kMGMzN2NiODMwMGQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZmM3ZTg1MC04YjIyLTExZTgtYjJhOS05ZDIy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",
        width = "34",
        height = "50";
      switch (state) {
        case "0":
          //绿色
          source =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAyCAYAAAA5kQlZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RTBCODdFQjU0OUVFMzExOTI1OUQ2MzcwRjVBMzk5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjAzRDQ3MThCM0ExMUU4QUMzRDkyRDY5QTVCNUQzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjAzRDQ3MDhCM0ExMUU4QUMzRDkyRDY5QTVCNUQzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiN2M5Yjc1ZC03OWYzLTVhNDMtYTQ0Ni1kMGMzN2NiODMwMGQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZmM3ZTg1MC04YjIyLTExZTgtYjJhOS05ZDIy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";
          width = "34";
          height = "50";
          break;
        case "1":
          //紅色 报警
          source =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAyCAYAAAA5kQlZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RTBCODdFQjU0OUVFMzExOTI1OUQ2MzcwRjVBMzk5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENDA5OUJCMThCM0ExMUU4QUM4MzlERkFDQTc2NTFEQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENDA5OUJCMDhCM0ExMUU4QUM4MzlERkFDQTc2NTFEQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiN2M5Yjc1ZC03OWYzLTVhNDMtYTQ0Ni1kMGMzN2NiODMwMGQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZmM3ZTg1MC04YjIyLTExZTgtYjJhOS05ZDIy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";
          width = "34";
          height = "50";
          break;
        case "2":
          //橙色 故障
          source =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAyCAYAAAA5kQlZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RTBCODdFQjU0OUVFMzExOTI1OUQ2MzcwRjVBMzk5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOUFFMkZBMThCMzkxMUU4QkU1OUQzRDY4QzM4MkE3OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOUFFMkZBMDhCMzkxMUU4QkU1OUQzRDY4QzM4MkE3OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiN2M5Yjc1ZC03OWYzLTVhNDMtYTQ0Ni1kMGMzN2NiODMwMGQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZmM3ZTg1MC04YjIyLTExZTgtYjJhOS05ZDIy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";
          width = "34";
          height = "50";
          break;
        case "3":
          //冒火 真警
          source =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAABECAYAAADk6ueFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RTBCODdFQjU0OUVFMzExOTI1OUQ2MzcwRjVBMzk5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NTlEQTg4MThCQjcxMUU4QkRFN0NERTcyNTUwMDU3NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NTlEQTg4MDhCQjcxMUU4QkRFN0NERTcyNTUwMDU3NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiN2M5Yjc1ZC03OWYzLTVhNDMtYTQ0Ni1kMGMzN2NiODMwMGQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZmM3ZTg1MC04YjIyLTExZTgtYjJhOS05ZDIy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";
          width = "34";
          height = "68";
          break;
        case "98":
          //紫色 预警
          source =
            "data:image/png;base64,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";
          width = "34";
          height = "50";
          break;
      }
      const symbol = new g2.syms.Picturemarkersymbol({
        //图片Base64编码
        source: source,
        //图片宽度
        width: width,
        //图片高度
        height: height,
        //图片旋转角度
        rotation: "0",
        //图片透明度
        opacity: "1",
        //图片X偏移量
        offsetX: height / 2,
        //图片Y偏移量
        offsetY: width / 2
      });
      return symbol;
    },
    // 企业信息
    groupCompany() {
      this.$axios
        .$GET({
          serviceName: "base_url",
          apiUrl: "/event/group/index/getChildrenOrg",
          params: {
            orgCode: "AHHF_QHHFY_20180408"
          }
        })
        .then(res => {
          if (res.data && res.data.code === "success") {
            this.unitInfoArr = res.data.data;
            // this.orgCodeArr.length // 接入单位数
            var subcenterArr = [];
            for (let i in this.unitCodeArr) {
              subcenterArr.push(this.unitCodeArr[i].subCenterCode);
            }
            this.subCenterCodeArr = Array.from(new Set(subcenterArr)).join(",");
            this.addCompany();
          } else {
            this.$message.error(res.data.message);
          }
        });
    },
    // 添加元素
    addCompany() {
      const that = this;
      const data = that.unitInfoArr;
      let eleArr = [];
      const multipoint = new g2.geom.MultiPoint();
      for (const i of data) {
        if (i.log !== "" && i.lat !== "") {
          const point = new g2.geom.Point({
            x: i.log,
            y: i.lat
          });
          multipoint.addPoint(point);
          //构造第一个element实例
          const element = new g2.ele.Element({
            geometry: point,
            symbol: that.getElementSymbol(i.state),
            tag: i
          });
          eleArr.push(element);
        }
      }
      that.toolTipWare.clear();
      that.elementLayer.clear();
      that.elementLayer.addElements(eleArr);
      if (eleArr.length > 0) {
        that.g2map.pan(multipoint, [100, 100, 100, 100]);
      }
    },
    showDetailedInfo(orgCode, orgName, point, subCenterCode) {
      const that = this;
      // 光标变形
      that.mapCursor = "cur-wait";
      that.clickState = "click-stop";
      that.$axios
        .$POST_QS({
          serviceName: "base_url",
          apiUrl: "/event/group/index/queryAlarmAccidentCountInfoWL",
          params: {
            unitId: orgCode
          }
        })
        .then(res => {
          if (res.data && res.data.code === "success") {
            let data = res.data.data;
            data.orgCode = orgCode;
            data.subCenterCode = subCenterCode;

            // 传递给子组件信息 调试用a
            // that.propComInfo = data;
            // setTimeout(function() {
            //   // 等待子组件渲染之后获取Html 添加到弹窗 调试用a
            //   const div = document.createElement("div");
            //   div.appendChild(that.$refs.popOver.$el);
            //   const tooltip = new g2.ext.Tooltip({
            //     anchor: point, //提示在地图上停靠位置
            //     content: div.innerHTML, //提示内容
            //     layerId: that.elementLayer.getLayerId(), //提示所在图层ID
            //     offset: [0, 0], //位置偏移量
            //     className: "g2-tooltip" //tooltip样式
            //   });
            //   that.toolTipWare.add(tooltip);
            // }, 10);

            // 后期更改为字符串拼接
            const tooltip = new g2.ext.Tooltip({
              anchor: point, //提示在地图上停靠位置
              content:
                `<div style="background:#f00" class="to-detail">` +
                `<div>` +
                data.orgName +
                `</div>` +
                `<div>` +
                data.subCenterCode +
                `</div>` +
                `<div>` +
                data.dutyTel +
                `</div>` +
                `<div>` +
                data.contacts +
                `</div>` +
                `<div>` +
                data.address +
                `</div>` +
                `<div>` +
                data.alarmCount +
                `</div>` +
                `<div>` +
                data.warningCount +
                `</div>` +
                `<div>` +
                data.troubleCount +
                `</div>` +
                `<div>` +
                data.abnormalCount +
                `</div>` +
                `</div>`, //提示内容
              layerId: that.elementLayer.getLayerId(), //提示所在图层ID
              offset: [0, 0], //位置偏移量
              className: "g2-tooltip" //tooltip样式
            });
            that.toolTipWare.add(tooltip);

            $(".to-detail").click(function() {
              console.log(data.orgCode);
              // 更新为点击设备点运营中心code
              that.$store.commit("userInfo/setCenterCode", subCenterCode);
              const { href } = that.$router.resolve({
                name: "home"
              });
              window.open(href, "_blank");
            });
          } else {
            that.$message.error(res.data.message);
          }
          that.mapCursor = "cur-default";
          that.clickState = "click-auto";
        });
    }
  },
  mounted() {
    const that = this;
    // 初始化地图
    that.g2map = new g2.maps.Map(mapConfig.mapOpts);
    that.g2map.init({
      targetId: "map"
    });
    // 详情图层
    that.toolTipWare = new g2.ext.TooltipWare({
      map: that.g2map
    });

    // 双色调
    that.baseLayer = new g2.lys.TileLayer({
      layerType: g2.lys.TileLayer,
      tileType: g2.lys.TileType.BaiduMap,
      opacity: 1.0,
      visible: false,
      matrix: 22,
      url: mapConfig.baseLayer.url
    });

    const baseLayerObj = mapConfig.baseLayerDeep;
    that.baseLayerDeep = new g2.lys.TileLayer({
      layerType: g2.lys.TileLayer,
      tileType: g2.lys.TileType.BaiduMap,
      visible: true,
      baiduType: 99,
      tileUrlFunction: function(row, column, level) {
        var url =
          baseLayerObj.url + "?&x=" + row + "&y=" + column + "&z=" + level;
        for (let k in baseLayerObj) {
          if (k === "url") {
            continue;
          }
          url += "&" + k + "=" + baseLayerObj[k];
        }
        return url;
      }
    });
    that.g2map.addLayer(that.baseLayer);
    that.g2map.addLayer(that.baseLayerDeep);
    // 切换色调
    let nowHour = new Date().getHours();
    if (nowHour > 8 && nowHour < 20) {
      that.themeLayer = true;
    } else {
      that.themeLayer = false;
    }

    //元素图层
    that.elementLayer = new g2.lys.ElementLayer({
      id: "enterprise_elementLayer"
    });
    that.g2map.addLayer(that.elementLayer);

    // 地图事件
    that.g2map.on("click", function(button, shift, screenX, screenY) {
      const obj = that.elementLayer.hitTest(screenX, screenY);
      that.toolTipWare.clear();
      if (obj) {
        var element = obj.element;
        var point = element.geometry;
        //展示弹框
        that.showDetailedInfo(
          element.tag.orgCode,
          element.tag.orgName,
          point,
          element.tag.subCenterCode
        );
      }
    });
    that.g2map.on("mousemove", function(button, shift, screenX, screenY) {
      const comPoint = that.elementLayer.hitTest(screenX, screenY);
      // 光标待优化
      if (that.clickState !== "click-stop") {
        if (comPoint) {
          that.mapCursor = "cur-pointer";
        } else {
          that.mapCursor = "cur-default";
        }
      }
    });
    // 地图企业点位
    this.groupCompany();
  }
};
</script>