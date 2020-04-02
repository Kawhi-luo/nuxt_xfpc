window.olms = function (e) {
        var t = {};

        function o(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(i.exports, i, i.exports, o), i.l = !0, i.exports
        }

        return o.m = e, o.c = t, o.d = function (e, t, r) {
            o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, o.t = function (e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (o.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var i in e) o.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
            return r
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 29)
    }([function (e, t, o) {
        (function (e, o) {
            (function (t) {
                "use strict";
                var r = {
                    $version: 8,
                    $root: {
                        version: {
                            required: !0,
                            type: "enum",
                            values: [8],
                            doc: "Style specification version number. Must be 8.",
                            example: 8
                        },
                        name: {type: "string", doc: "A human-readable name for the style.", example: "Bright"},
                        metadata: {
                            type: "*",
                            doc: "Arbitrary properties useful to track with the stylesheet, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'mapbox:'."
                        },
                        center: {
                            type: "array",
                            value: "number",
                            doc: "Default map center in longitude and latitude.  The style center will be used only if the map has not been positioned by other means (e.g. map options or user interaction).",
                            example: [-73.9749, 40.7736]
                        },
                        zoom: {
                            type: "number",
                            doc: "Default zoom level.  The style zoom will be used only if the map has not been positioned by other means (e.g. map options or user interaction).",
                            example: 12.5
                        },
                        bearing: {
                            type: "number",
                            default: 0,
                            period: 360,
                            units: "degrees",
                            doc: 'Default bearing, in degrees. The bearing is the compass direction that is "up"; for example, a bearing of 90° orients the map so that east is up. This value will be used only if the map has not been positioned by other means (e.g. map options or user interaction).',
                            example: 29
                        },
                        pitch: {
                            type: "number",
                            default: 0,
                            units: "degrees",
                            doc: "Default pitch, in degrees. Zero is perpendicular to the surface, for a look straight down at the map, while a greater value like 60 looks ahead towards the horizon. The style pitch will be used only if the map has not been positioned by other means (e.g. map options or user interaction).",
                            example: 50
                        },
                        light: {
                            type: "light",
                            doc: "The global light source.",
                            example: {anchor: "viewport", color: "white", intensity: .4}
                        },
                        sources: {
                            required: !0,
                            type: "sources",
                            doc: "Data source specifications.",
                            example: {"mapbox-streets": {type: "vector", url: "mapbox://mapbox.mapbox-streets-v6"}}
                        },
                        sprite: {
                            type: "string",
                            doc: "A base URL for retrieving the sprite image and metadata. The extensions `.png`, `.json` and scale factor `@2x.png` will be automatically appended. This property is required if any layer uses the `background-pattern`, `fill-pattern`, `line-pattern`, `fill-extrusion-pattern`, or `icon-image` properties. The URL must be absolute, containing the [scheme, authority and path components](https://en.wikipedia.org/wiki/URL#Syntax).",
                            example: "mapbox://sprites/mapbox/bright-v8"
                        },
                        glyphs: {
                            type: "string",
                            doc: "A URL template for loading signed-distance-field glyph sets in PBF format. The URL must include `{fontstack}` and `{range}` tokens. This property is required if any layer uses the `text-field` layout property. The URL must be absolute, containing the [scheme, authority and path components](https://en.wikipedia.org/wiki/URL#Syntax).",
                            example: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf"
                        },
                        transition: {
                            type: "transition",
                            doc: "A global transition definition to use as a default across properties, to be used for timing transitions between one value and the next when no property-specific transition is set. Collision-based symbol fading is controlled independently of the style's `transition` property.",
                            example: {duration: 300, delay: 0}
                        },
                        layers: {
                            required: !0,
                            type: "array",
                            value: "layer",
                            doc: "Layers will be drawn in the order of this array.",
                            example: [{
                                id: "water",
                                source: "mapbox-streets",
                                "source-layer": "water",
                                type: "fill",
                                paint: {"fill-color": "#00ffff"}
                            }]
                        }
                    },
                    sources: {
                        "*": {
                            type: "source",
                            doc: "Specification of a data source. For vector and raster sources, either TileJSON or a URL to a TileJSON must be provided. For image and video sources, a URL must be provided. For GeoJSON sources, a URL or inline GeoJSON must be provided."
                        }
                    },
                    source: ["source_vector", "source_raster", "source_raster_dem", "source_geojson", "source_video", "source_image"],
                    source_vector: {
                        type: {
                            required: !0,
                            type: "enum",
                            values: {vector: {doc: "A vector tile source."}},
                            doc: "The type of the source."
                        },
                        url: {
                            type: "string",
                            doc: "A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<mapid>`."
                        },
                        tiles: {
                            type: "array",
                            value: "string",
                            doc: "An array of one or more tile source URLs, as in the TileJSON spec."
                        },
                        bounds: {
                            type: "array",
                            value: "number",
                            length: 4,
                            default: [-180, -85.051129, 180, 85.051129],
                            doc: "An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."
                        },
                        scheme: {
                            type: "enum",
                            values: {xyz: {doc: "Slippy map tilenames scheme."}, tms: {doc: "OSGeo spec scheme."}},
                            default: "xyz",
                            doc: "Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed."
                        },
                        minzoom: {
                            type: "number",
                            default: 0,
                            doc: "Minimum zoom level for which tiles are available, as in the TileJSON spec."
                        },
                        maxzoom: {
                            type: "number",
                            default: 22,
                            doc: "Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."
                        },
                        attribution: {
                            type: "string",
                            doc: "Contains an attribution to be displayed when the map is shown to a user."
                        },
                        "*": {type: "*", doc: "Other keys to configure the data source."}
                    },
                    source_raster: {
                        type: {
                            required: !0,
                            type: "enum",
                            values: {raster: {doc: "A raster tile source."}},
                            doc: "The type of the source."
                        },
                        url: {
                            type: "string",
                            doc: "A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<mapid>`."
                        },
                        tiles: {
                            type: "array",
                            value: "string",
                            doc: "An array of one or more tile source URLs, as in the TileJSON spec."
                        },
                        bounds: {
                            type: "array",
                            value: "number",
                            length: 4,
                            default: [-180, -85.051129, 180, 85.051129],
                            doc: "An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."
                        },
                        minzoom: {
                            type: "number",
                            default: 0,
                            doc: "Minimum zoom level for which tiles are available, as in the TileJSON spec."
                        },
                        maxzoom: {
                            type: "number",
                            default: 22,
                            doc: "Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."
                        },
                        tileSize: {
                            type: "number",
                            default: 512,
                            units: "pixels",
                            doc: "The minimum visual size to display tiles for this layer. Only configurable for raster layers."
                        },
                        scheme: {
                            type: "enum",
                            values: {xyz: {doc: "Slippy map tilenames scheme."}, tms: {doc: "OSGeo spec scheme."}},
                            default: "xyz",
                            doc: "Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed."
                        },
                        attribution: {
                            type: "string",
                            doc: "Contains an attribution to be displayed when the map is shown to a user."
                        },
                        "*": {type: "*", doc: "Other keys to configure the data source."}
                    },
                    source_raster_dem: {
                        type: {
                            required: !0,
                            type: "enum",
                            values: {"raster-dem": {doc: "A RGB-encoded raster DEM source"}},
                            doc: "The type of the source."
                        },
                        url: {
                            type: "string",
                            doc: "A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<mapid>`."
                        },
                        tiles: {
                            type: "array",
                            value: "string",
                            doc: "An array of one or more tile source URLs, as in the TileJSON spec."
                        },
                        bounds: {
                            type: "array",
                            value: "number",
                            length: 4,
                            default: [-180, -85.051129, 180, 85.051129],
                            doc: "An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."
                        },
                        minzoom: {
                            type: "number",
                            default: 0,
                            doc: "Minimum zoom level for which tiles are available, as in the TileJSON spec."
                        },
                        maxzoom: {
                            type: "number",
                            default: 22,
                            doc: "Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."
                        },
                        tileSize: {
                            type: "number",
                            default: 512,
                            units: "pixels",
                            doc: "The minimum visual size to display tiles for this layer. Only configurable for raster layers."
                        },
                        attribution: {
                            type: "string",
                            doc: "Contains an attribution to be displayed when the map is shown to a user."
                        },
                        encoding: {
                            type: "enum",
                            values: {
                                terrarium: {doc: "Terrarium format PNG tiles. See https://aws.amazon.com/es/public-datasets/terrain/ for more info."},
                                mapbox: {doc: "Mapbox Terrain RGB tiles. See https://www.mapbox.com/help/access-elevation-data/#mapbox-terrain-rgb for more info."}
                            },
                            default: "mapbox",
                            doc: "The encoding used by this source. Mapbox Terrain RGB is used by default"
                        },
                        "*": {type: "*", doc: "Other keys to configure the data source."}
                    },
                    source_geojson: {
                        type: {
                            required: !0,
                            type: "enum",
                            values: {geojson: {doc: "A GeoJSON data source."}},
                            doc: "The data type of the GeoJSON source."
                        },
                        data: {type: "*", doc: "A URL to a GeoJSON file, or inline GeoJSON."},
                        maxzoom: {
                            type: "number",
                            default: 18,
                            doc: "Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels)."
                        },
                        attribution: {
                            type: "string",
                            doc: "Contains an attribution to be displayed when the map is shown to a user."
                        },
                        buffer: {
                            type: "number",
                            default: 128,
                            maximum: 512,
                            minimum: 0,
                            doc: "Size of the tile buffer on each side. A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance."
                        },
                        tolerance: {
                            type: "number",
                            default: .375,
                            doc: "Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance)."
                        },
                        cluster: {
                            type: "boolean",
                            default: !1,
                            doc: "If the data is a collection of point features, setting this to true clusters the points by radius into groups. Cluster groups become new `Point` features in the source with additional properties:\n * `cluster` Is `true` if the point is a cluster \n * `cluster_id` A unqiue id for the cluster to be used in conjunction with the [cluster inspection methods](https://www.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterexpansionzoom)\n * `point_count` Number of original points grouped into this cluster\n * `point_count_abbreviated` An abbreviated point count"
                        },
                        clusterRadius: {
                            type: "number",
                            default: 50,
                            minimum: 0,
                            doc: "Radius of each cluster if clustering is enabled. A value of 512 indicates a radius equal to the width of a tile."
                        },
                        clusterMaxZoom: {
                            type: "number",
                            doc: "Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered)."
                        },
                        clusterProperties: {
                            type: "*",
                            doc: 'An object defining custom properties on the generated clusters if clustering is enabled, aggregating values from clustered points. Has the form `{"property_name": [operator, map_expression]}`. `operator` is any expression function that accepts at least 2 operands (e.g. `"+"` or `"max"`) — it accumulates the property value from clusters/points the cluster contains; `map_expression` produces the value of a single point.\n\nExample: `{"sum": ["+", ["get", "scalerank"]]}`.\n\nFor more advanced use cases, in place of `operator`, you can use a custom reduce expression that references a special `["accumulated"]` value, e.g.:\n`{"sum": [["+", ["accumulated"], ["get", "sum"]], ["get", "scalerank"]]}`'
                        },
                        lineMetrics: {
                            type: "boolean",
                            default: !1,
                            doc: "Whether to calculate line distance metrics. This is required for line layers that specify `line-gradient` values."
                        },
                        generateId: {
                            type: "boolean",
                            default: !1,
                            doc: "Whether to generate ids for the geojson features. When enabled, the `feature.id` property will be auto assigned based on its index in the `features` array, over-writing any previous values."
                        }
                    },
                    source_video: {
                        type: {
                            required: !0,
                            type: "enum",
                            values: {video: {doc: "A video data source."}},
                            doc: "The data type of the video source."
                        },
                        urls: {
                            required: !0,
                            type: "array",
                            value: "string",
                            doc: "URLs to video content in order of preferred format."
                        },
                        coordinates: {
                            required: !0,
                            doc: "Corners of video specified in longitude, latitude pairs.",
                            type: "array",
                            length: 4,
                            value: {
                                type: "array",
                                length: 2,
                                value: "number",
                                doc: "A single longitude, latitude pair."
                            }
                        }
                    },
                    source_image: {
                        type: {
                            required: !0,
                            type: "enum",
                            values: {image: {doc: "An image data source."}},
                            doc: "The data type of the image source."
                        },
                        url: {required: !0, type: "string", doc: "URL that points to an image."},
                        coordinates: {
                            required: !0,
                            doc: "Corners of image specified in longitude, latitude pairs.",
                            type: "array",
                            length: 4,
                            value: {
                                type: "array",
                                length: 2,
                                value: "number",
                                doc: "A single longitude, latitude pair."
                            }
                        }
                    },
                    layer: {
                        id: {type: "string", doc: "Unique layer name.", required: !0},
                        type: {
                            type: "enum",
                            values: {
                                fill: {
                                    doc: "A filled polygon with an optional stroked border.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.10.0",
                                            android: "2.0.1",
                                            ios: "2.0.0",
                                            macos: "0.1.0"
                                        }
                                    }
                                },
                                line: {
                                    doc: "A stroked line.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.10.0",
                                            android: "2.0.1",
                                            ios: "2.0.0",
                                            macos: "0.1.0"
                                        }
                                    }
                                },
                                symbol: {
                                    doc: "An icon or a text label.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.10.0",
                                            android: "2.0.1",
                                            ios: "2.0.0",
                                            macos: "0.1.0"
                                        }
                                    }
                                },
                                circle: {
                                    doc: "A filled circle.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.10.0",
                                            android: "2.0.1",
                                            ios: "2.0.0",
                                            macos: "0.1.0"
                                        }
                                    }
                                },
                                heatmap: {
                                    doc: "A heatmap.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.41.0",
                                            android: "6.0.0",
                                            ios: "4.0.0",
                                            macos: "0.7.0"
                                        }
                                    }
                                },
                                "fill-extrusion": {
                                    doc: "An extruded (3D) polygon.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.27.0",
                                            android: "5.1.0",
                                            ios: "3.6.0",
                                            macos: "0.5.0"
                                        }
                                    }
                                },
                                raster: {
                                    doc: "Raster map textures such as satellite imagery.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.10.0",
                                            android: "2.0.1",
                                            ios: "2.0.0",
                                            macos: "0.1.0"
                                        }
                                    }
                                },
                                hillshade: {
                                    doc: "Client-side hillshading visualization based on DEM data. Currently, the implementation only supports Mapbox Terrain RGB and Mapzen Terrarium tiles.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.43.0",
                                            android: "6.0.0",
                                            ios: "4.0.0",
                                            macos: "0.7.0"
                                        }
                                    }
                                },
                                background: {
                                    doc: "The background color or pattern of the map.",
                                    "sdk-support": {
                                        "basic functionality": {
                                            js: "0.10.0",
                                            android: "2.0.1",
                                            ios: "2.0.0",
                                            macos: "0.1.0"
                                        }
                                    }
                                }
                            },
                            doc: "Rendering type of this layer.",
                            required: !0
                        },
                        metadata: {
                            type: "*",
                            doc: "Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'mapbox:'."
                        },
                        source: {
                            type: "string",
                            doc: "Name of a source description to be used for this layer. Required for all layer types except `background`."
                        },
                        "source-layer": {
                            type: "string",
                            doc: "Layer to use from a vector tile source. Required for vector tile sources; prohibited for all other source types, including GeoJSON sources."
                        },
                        minzoom: {
                            type: "number",
                            minimum: 0,
                            maximum: 24,
                            doc: "The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden."
                        },
                        maxzoom: {
                            type: "number",
                            minimum: 0,
                            maximum: 24,
                            doc: "The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden."
                        },
                        filter: {
                            type: "filter",
                            doc: "A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The `feature-state` expression is not supported in filter expressions."
                        },
                        layout: {type: "layout", doc: "Layout properties for the layer."},
                        paint: {type: "paint", doc: "Default paint properties for this layer."}
                    },
                    layout: ["layout_fill", "layout_line", "layout_circle", "layout_heatmap", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_hillshade", "layout_background"],
                    layout_background: {
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }
                            },
                            "property-type": "constant"
                        }
                    },
                    layout_fill: {
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }
                            },
                            "property-type": "constant"
                        }
                    },
                    layout_circle: {
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }
                            },
                            "property-type": "constant"
                        }
                    },
                    layout_heatmap: {
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.41.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }
                            },
                            "property-type": "constant"
                        }
                    },
                    "layout_fill-extrusion": {
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }
                            },
                            "property-type": "constant"
                        }
                    },
                    layout_line: {
                        "line-cap": {
                            type: "enum",
                            values: {
                                butt: {doc: "A cap with a squared-off end which is drawn to the exact endpoint of the line."},
                                round: {doc: "A cap with a rounded end which is drawn beyond the endpoint of the line at a radius of one-half of the line's width and centered on the endpoint of the line."},
                                square: {doc: "A cap with a squared-off end which is drawn beyond the endpoint of the line at a distance of one-half of the line's width."}
                            },
                            default: "butt",
                            doc: "The display of line endings.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "line-join": {
                            type: "enum",
                            values: {
                                bevel: {doc: "A join with a squared-off end which is drawn beyond the endpoint of the line at a distance of one-half of the line's width."},
                                round: {doc: "A join with a rounded end which is drawn beyond the endpoint of the line at a radius of one-half of the line's width and centered on the endpoint of the line."},
                                miter: {doc: "A join with a sharp, angled corner which is drawn with the outer sides beyond the endpoint of the path until they meet."}
                            },
                            default: "miter",
                            doc: "The display of lines when joining.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.40.0", android: "5.2.0", ios: "3.7.0", macos: "0.6.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "line-miter-limit": {
                            type: "number",
                            default: 2,
                            doc: "Used to automatically convert miter joins to bevel joins for sharp angles.",
                            requires: [{"line-join": "miter"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "line-round-limit": {
                            type: "number",
                            default: 1.05,
                            doc: "Used to automatically convert round joins to miter joins for shallow angles.",
                            requires: [{"line-join": "round"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            "property-type": "constant"
                        }
                    },
                    layout_symbol: {
                        "symbol-placement": {
                            type: "enum",
                            values: {
                                point: {doc: "The label is placed at the point where the geometry is located."},
                                line: {doc: "The label is placed along the line of the geometry. Can only be used on `LineString` and `Polygon` geometries."},
                                "line-center": {doc: "The label is placed at the center of the line of the geometry. Can only be used on `LineString` and `Polygon` geometries. Note that a single feature in a vector tile may contain multiple line geometries."}
                            },
                            default: "point",
                            doc: "Label placement relative to its geometry.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                },
                                "`line-center` value": {js: "0.47.0", android: "6.4.0", ios: "4.3.0", macos: "0.10.0"},
                                "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "symbol-spacing": {
                            type: "number",
                            default: 250,
                            minimum: 1,
                            units: "pixels",
                            doc: "Distance between two symbol anchors.",
                            requires: [{"symbol-placement": "line"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "symbol-avoid-edges": {
                            type: "boolean",
                            default: !1,
                            doc: "If true, the symbols will not cross tile edges to avoid mutual collisions. Recommended in layers that don't have enough padding in the vector tile to prevent collisions, or if it is a point symbol layer placed after a line symbol layer.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "symbol-sort-key": {
                            type: "number",
                            doc: "Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key when they overlap. Features with a lower sort key will have priority over other features when doing placement.",
                            "sdk-support": {js: "0.53.0"},
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "symbol-z-order": {
                            type: "enum",
                            values: {
                                auto: {doc: "If `symbol-sort-key` is set, sort based on that. Otherwise sort symbols by their y-position relative to the viewport."},
                                "viewport-y": {doc: "Symbols will be sorted by their y-position relative to the viewport."},
                                source: {doc: "Symbols will be rendered in the same order as the source data with no sorting applied."}
                            },
                            default: "auto",
                            doc: "Controls the order in which overlapping symbols in the same layer are rendered",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.49.0",
                                    android: "6.6.0",
                                    ios: "4.5.0",
                                    macos: "0.12.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-allow-overlap": {
                            type: "boolean",
                            default: !1,
                            doc: "If true, the icon will be visible even if it collides with other previously drawn symbols.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-ignore-placement": {
                            type: "boolean",
                            default: !1,
                            doc: "If true, other symbols can be visible even if they collide with the icon.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-optional": {
                            type: "boolean",
                            default: !1,
                            doc: "If true, text will display without their corresponding icons when the icon collides with other symbols and the text does not.",
                            requires: ["icon-image", "text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-rotation-alignment": {
                            type: "enum",
                            values: {
                                map: {doc: "When `symbol-placement` is set to `point`, aligns icons east-west. When `symbol-placement` is set to `line` or `line-center`, aligns icon x-axes with the line."},
                                viewport: {doc: "Produces icons whose x-axes are aligned with the x-axis of the viewport, regardless of the value of `symbol-placement`."},
                                auto: {doc: "When `symbol-placement` is set to `point`, this is equivalent to `viewport`. When `symbol-placement` is set to `line` or `line-center`, this is equivalent to `map`."}
                            },
                            default: "auto",
                            doc: "In combination with `symbol-placement`, determines the rotation behavior of icons.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                },
                                "`auto` value": {js: "0.25.0", android: "4.2.0", ios: "3.4.0", macos: "0.3.0"},
                                "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-size": {
                            type: "number",
                            default: 1,
                            minimum: 0,
                            units: "factor of the original icon size",
                            doc: "Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by `icon-size`. 1 is the original size; 3 triples the size of the image.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.35.0", android: "5.1.0", ios: "3.6.0", macos: "0.5.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "icon-text-fit": {
                            type: "enum",
                            values: {
                                none: {doc: "The icon is displayed at its intrinsic aspect ratio."},
                                width: {doc: "The icon is scaled in the x-dimension to fit the width of the text."},
                                height: {doc: "The icon is scaled in the y-dimension to fit the height of the text."},
                                both: {doc: "The icon is scaled in both x- and y-dimensions."}
                            },
                            default: "none",
                            doc: "Scales the icon to fit around the associated text.",
                            requires: ["icon-image", "text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.21.0",
                                    android: "4.2.0",
                                    ios: "3.4.0",
                                    macos: "0.2.1"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-text-fit-padding": {
                            type: "array",
                            value: "number",
                            length: 4,
                            default: [0, 0, 0, 0],
                            units: "pixels",
                            doc: "Size of the additional area added to dimensions determined by `icon-text-fit`, in clockwise order: top, right, bottom, left.",
                            requires: ["icon-image", "text-field", {"icon-text-fit": ["both", "width", "height"]}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.21.0",
                                    android: "4.2.0",
                                    ios: "3.4.0",
                                    macos: "0.2.1"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-image": {
                            type: "string",
                            doc: "Name of image in sprite to use for drawing an image background.",
                            tokens: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.35.0", android: "5.1.0", ios: "3.6.0", macos: "0.5.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "icon-rotate": {
                            type: "number",
                            default: 0,
                            period: 360,
                            units: "degrees",
                            doc: "Rotates the icon clockwise.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.21.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "icon-padding": {
                            type: "number",
                            default: 2,
                            minimum: 0,
                            units: "pixels",
                            doc: "Size of the additional area around the icon bounding box used for detecting symbol collisions.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-keep-upright": {
                            type: "boolean",
                            default: !1,
                            doc: "If true, the icon may be flipped to prevent it from being rendered upside-down.",
                            requires: ["icon-image", {"icon-rotation-alignment": "map"}, {"symbol-placement": ["line", "line-center"]}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-offset": {
                            type: "array",
                            value: "number",
                            length: 2,
                            default: [0, 0],
                            doc: "Offset distance of icon from its anchor. Positive values indicate right and down, while negative values indicate left and up. Each component is multiplied by the value of `icon-size` to obtain the final offset in pixels. When combined with `icon-rotate` the offset will be as if the rotated direction was up.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.29.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "icon-anchor": {
                            type: "enum",
                            values: {
                                center: {doc: "The center of the icon is placed closest to the anchor."},
                                left: {doc: "The left side of the icon is placed closest to the anchor."},
                                right: {doc: "The right side of the icon is placed closest to the anchor."},
                                top: {doc: "The top of the icon is placed closest to the anchor."},
                                bottom: {doc: "The bottom of the icon is placed closest to the anchor."},
                                "top-left": {doc: "The top left corner of the icon is placed closest to the anchor."},
                                "top-right": {doc: "The top right corner of the icon is placed closest to the anchor."},
                                "bottom-left": {doc: "The bottom left corner of the icon is placed closest to the anchor."},
                                "bottom-right": {doc: "The bottom right corner of the icon is placed closest to the anchor."}
                            },
                            default: "center",
                            doc: "Part of the icon placed closest to the anchor.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.40.0",
                                    android: "5.2.0",
                                    ios: "3.7.0",
                                    macos: "0.6.0"
                                }, "data-driven styling": {js: "0.40.0", android: "5.2.0", ios: "3.7.0", macos: "0.6.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "icon-pitch-alignment": {
                            type: "enum",
                            values: {
                                map: {doc: "The icon is aligned to the plane of the map."},
                                viewport: {doc: "The icon is aligned to the plane of the viewport."},
                                auto: {doc: "Automatically matches the value of `icon-rotation-alignment`."}
                            },
                            default: "auto",
                            doc: "Orientation of icon when map is pitched.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.39.0",
                                    android: "5.2.0",
                                    ios: "3.7.0",
                                    macos: "0.6.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-pitch-alignment": {
                            type: "enum",
                            values: {
                                map: {doc: "The text is aligned to the plane of the map."},
                                viewport: {doc: "The text is aligned to the plane of the viewport."},
                                auto: {doc: "Automatically matches the value of `text-rotation-alignment`."}
                            },
                            default: "auto",
                            doc: "Orientation of text when map is pitched.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.21.0",
                                    android: "4.2.0",
                                    ios: "3.4.0",
                                    macos: "0.2.1"
                                },
                                "`auto` value": {js: "0.25.0", android: "4.2.0", ios: "3.4.0", macos: "0.3.0"},
                                "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-rotation-alignment": {
                            type: "enum",
                            values: {
                                map: {doc: "When `symbol-placement` is set to `point`, aligns text east-west. When `symbol-placement` is set to `line` or `line-center`, aligns text x-axes with the line."},
                                viewport: {doc: "Produces glyphs whose x-axes are aligned with the x-axis of the viewport, regardless of the value of `symbol-placement`."},
                                auto: {doc: "When `symbol-placement` is set to `point`, this is equivalent to `viewport`. When `symbol-placement` is set to `line` or `line-center`, this is equivalent to `map`."}
                            },
                            default: "auto",
                            doc: "In combination with `symbol-placement`, determines the rotation behavior of the individual glyphs forming the text.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                },
                                "`auto` value": {js: "0.25.0", android: "4.2.0", ios: "3.4.0", macos: "0.3.0"},
                                "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-field": {
                            type: "formatted",
                            default: "",
                            tokens: !0,
                            doc: "Value to use for a text label. If a plain `string` is provided, it will be treated as a `formatted` with default/inherited formatting options.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-font": {
                            type: "array",
                            value: "string",
                            default: ["Open Sans Regular", "Arial Unicode MS Regular"],
                            doc: "Font stack to use for displaying text.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.43.0", android: "6.0.0", ios: "4.0.0", macos: "0.7.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-size": {
                            type: "number",
                            default: 16,
                            minimum: 0,
                            units: "pixels",
                            doc: "Font size.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.35.0", android: "5.1.0", ios: "3.6.0", macos: "0.5.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-max-width": {
                            type: "number",
                            default: 10,
                            minimum: 0,
                            units: "ems",
                            doc: "The maximum line width for text wrapping.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.40.0", android: "5.2.0", ios: "3.7.0", macos: "0.6.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-line-height": {
                            type: "number",
                            default: 1.2,
                            units: "ems",
                            doc: "Text leading value for multi-line text.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-letter-spacing": {
                            type: "number",
                            default: 0,
                            units: "ems",
                            doc: "Text tracking amount.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.40.0", android: "5.2.0", ios: "3.7.0", macos: "0.6.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-justify": {
                            type: "enum",
                            values: {
                                auto: {doc: "The text is aligned towards the anchor position."},
                                left: {doc: "The text is aligned to the left."},
                                center: {doc: "The text is centered."},
                                right: {doc: "The text is aligned to the right."}
                            },
                            default: "center",
                            doc: "Text justification options.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                },
                                "data-driven styling": {js: "0.39.0", android: "5.2.0", ios: "3.7.0", macos: "0.6.0"},
                                auto: {js: "0.54.0", android: "7.4.0", ios: "4.10.0", macos: "0.14.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-radial-offset": {
                            type: "number",
                            units: "ems",
                            default: 0,
                            doc: "Radial offset of text, in the direction of the symbol's anchor. Useful in combination with `text-variable-anchor`, which doesn't support the two-dimensional `text-offset`.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.54.0",
                                    android: "7.4.0",
                                    ios: "4.10.0",
                                    macos: "0.14.0"
                                },
                                "data-driven styling": {js: "0.54.0", android: "7.4.0", ios: "4.10.0", macos: "0.14.0"}
                            },
                            requires: [{"!": "text-offset"}],
                            "property-type": "data-driven",
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]}
                        },
                        "text-variable-anchor": {
                            type: "array",
                            value: "enum",
                            values: {
                                center: {doc: "The center of the text is placed closest to the anchor."},
                                left: {doc: "The left side of the text is placed closest to the anchor."},
                                right: {doc: "The right side of the text is placed closest to the anchor."},
                                top: {doc: "The top of the text is placed closest to the anchor."},
                                bottom: {doc: "The bottom of the text is placed closest to the anchor."},
                                "top-left": {doc: "The top left corner of the text is placed closest to the anchor."},
                                "top-right": {doc: "The top right corner of the text is placed closest to the anchor."},
                                "bottom-left": {doc: "The bottom left corner of the text is placed closest to the anchor."},
                                "bottom-right": {doc: "The bottom right corner of the text is placed closest to the anchor."}
                            },
                            requires: [{"!": "text-anchor"}, {"!": "text-offset"}, {"symbol-placement": ["point"]}],
                            doc: "To increase the chance of placing high-priority labels on the map, you can provide an array of `text-anchor` locations: the render will attempt to place the label at each location, in order, before moving onto the next label. Use `text-justify: auto` to choose justification based on anchor position. To apply an offset, use the `text-radial-offset` instead of the two-dimensional `text-offset`.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.54.0",
                                    android: "7.4.0",
                                    ios: "4.10.0",
                                    macos: "0.14.0"
                                },
                                "data-driven styling": {
                                    js: "Not yet supported",
                                    android: "Not yet supported",
                                    ios: "Not yet supported",
                                    macos: "Not yet supported"
                                }
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-anchor": {
                            type: "enum",
                            requires: ["text-field"],
                            values: {
                                center: {doc: "The center of the text is placed closest to the anchor."},
                                left: {doc: "The left side of the text is placed closest to the anchor."},
                                right: {doc: "The right side of the text is placed closest to the anchor."},
                                top: {doc: "The top of the text is placed closest to the anchor."},
                                bottom: {doc: "The bottom of the text is placed closest to the anchor."},
                                "top-left": {doc: "The top left corner of the text is placed closest to the anchor."},
                                "top-right": {doc: "The top right corner of the text is placed closest to the anchor."},
                                "bottom-left": {doc: "The bottom left corner of the text is placed closest to the anchor."},
                                "bottom-right": {doc: "The bottom right corner of the text is placed closest to the anchor."}
                            },
                            default: "center",
                            doc: "Part of the text placed closest to the anchor.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.39.0", android: "5.2.0", ios: "3.7.0", macos: "0.6.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-max-angle": {
                            type: "number",
                            default: 45,
                            units: "degrees",
                            doc: "Maximum angle change between adjacent characters.",
                            requires: ["text-field", {"symbol-placement": ["line", "line-center"]}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-rotate": {
                            type: "number",
                            default: 0,
                            period: 360,
                            units: "degrees",
                            doc: "Rotates the text clockwise.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.35.0", android: "5.1.0", ios: "3.6.0", macos: "0.5.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-padding": {
                            type: "number",
                            default: 2,
                            minimum: 0,
                            units: "pixels",
                            doc: "Size of the additional area around the text bounding box used for detecting symbol collisions.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-keep-upright": {
                            type: "boolean",
                            default: !0,
                            doc: "If true, the text may be flipped vertically to prevent it from being rendered upside-down.",
                            requires: ["text-field", {"text-rotation-alignment": "map"}, {"symbol-placement": ["line", "line-center"]}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-transform": {
                            type: "enum",
                            values: {
                                none: {doc: "The text is not altered."},
                                uppercase: {doc: "Forces all letters to be displayed in uppercase."},
                                lowercase: {doc: "Forces all letters to be displayed in lowercase."}
                            },
                            default: "none",
                            doc: "Specifies how to capitalize text, similar to the CSS `text-transform` property.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-offset": {
                            type: "array",
                            doc: "Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up.",
                            value: "number",
                            units: "ems",
                            length: 2,
                            default: [0, 0],
                            requires: ["text-field", {"!": "text-radial-offset"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.35.0", android: "5.1.0", ios: "3.6.0", macos: "0.5.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature"]},
                            "property-type": "data-driven"
                        },
                        "text-allow-overlap": {
                            type: "boolean",
                            default: !1,
                            doc: "If true, the text will be visible even if it collides with other previously drawn symbols.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-ignore-placement": {
                            type: "boolean",
                            default: !1,
                            doc: "If true, other symbols can be visible even if they collide with the text.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-optional": {
                            type: "boolean",
                            default: !1,
                            doc: "If true, icons will display without their corresponding text when the text collides with other symbols and the icon does not.",
                            requires: ["text-field", "icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            "property-type": "constant"
                        }
                    },
                    layout_raster: {
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            "property-type": "constant"
                        }
                    },
                    layout_hillshade: {
                        visibility: {
                            type: "enum",
                            values: {visible: {doc: "The layer is shown."}, none: {doc: "The layer is not shown."}},
                            default: "visible",
                            doc: "Whether this layer is displayed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.43.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            "property-type": "constant"
                        }
                    },
                    filter: {type: "array", value: "*", doc: "A filter selects specific features from a layer."},
                    filter_operator: {
                        type: "enum",
                        values: {
                            "==": {doc: '`["==", key, value]` equality: `feature[key] = value`'},
                            "!=": {doc: '`["!=", key, value]` inequality: `feature[key] ≠ value`'},
                            ">": {doc: '`[">", key, value]` greater than: `feature[key] > value`'},
                            ">=": {doc: '`[">=", key, value]` greater than or equal: `feature[key] ≥ value`'},
                            "<": {doc: '`["<", key, value]` less than: `feature[key] < value`'},
                            "<=": {doc: '`["<=", key, value]` less than or equal: `feature[key] ≤ value`'},
                            in: {doc: '`["in", key, v0, ..., vn]` set inclusion: `feature[key] ∈ {v0, ..., vn}`'},
                            "!in": {doc: '`["!in", key, v0, ..., vn]` set exclusion: `feature[key] ∉ {v0, ..., vn}`'},
                            all: {doc: '`["all", f0, ..., fn]` logical `AND`: `f0 ∧ ... ∧ fn`'},
                            any: {doc: '`["any", f0, ..., fn]` logical `OR`: `f0 ∨ ... ∨ fn`'},
                            none: {doc: '`["none", f0, ..., fn]` logical `NOR`: `¬f0 ∧ ... ∧ ¬fn`'},
                            has: {doc: '`["has", key]` `feature[key]` exists'},
                            "!has": {doc: '`["!has", key]` `feature[key]` does not exist'}
                        },
                        doc: "The filter operator."
                    },
                    geometry_type: {
                        type: "enum",
                        values: {
                            Point: {doc: "Filter to point geometries."},
                            LineString: {doc: "Filter to line geometries."},
                            Polygon: {doc: "Filter to polygon geometries."}
                        },
                        doc: "The geometry type for the filter to select."
                    },
                    function: {
                        expression: {type: "expression", doc: "An expression."},
                        stops: {type: "array", doc: "An array of stops.", value: "function_stop"},
                        base: {
                            type: "number",
                            default: 1,
                            minimum: 0,
                            doc: "The exponential base of the interpolation curve. It controls the rate at which the result increases. Higher values make the result increase more towards the high end of the range. With `1` the stops are interpolated linearly."
                        },
                        property: {
                            type: "string",
                            doc: "The name of a feature property to use as the function input.",
                            default: "$zoom"
                        },
                        type: {
                            type: "enum",
                            values: {
                                identity: {doc: "Return the input value as the output value."},
                                exponential: {doc: "Generate an output by interpolating between stops just less than and just greater than the function input."},
                                interval: {doc: "Return the output value of the stop just less than the function input."},
                                categorical: {doc: "Return the output value of the stop equal to the function input."}
                            },
                            doc: "The interpolation strategy to use in function evaluation.",
                            default: "exponential"
                        },
                        colorSpace: {
                            type: "enum",
                            values: {
                                rgb: {doc: "Use the RGB color space to interpolate color values"},
                                lab: {doc: "Use the LAB color space to interpolate color values."},
                                hcl: {doc: "Use the HCL color space to interpolate color values, interpolating the Hue, Chroma, and Luminance channels individually."}
                            },
                            doc: "The color space in which colors interpolated. Interpolating colors in perceptual color spaces like LAB and HCL tend to produce color ramps that look more consistent and produce colors that can be differentiated more easily than those interpolated in RGB space.",
                            default: "rgb"
                        },
                        default: {
                            type: "*",
                            required: !1,
                            doc: "A value to serve as a fallback function result when a value isn't otherwise available. It is used in the following circumstances:\n* In categorical functions, when the feature value does not match any of the stop domain values.\n* In property and zoom-and-property functions, when a feature does not contain a value for the specified property.\n* In identity functions, when the feature value is not valid for the style property (for example, if the function is being used for a `circle-color` property but the feature property value is not a string or not a valid color).\n* In interval or exponential property and zoom-and-property functions, when the feature value is not numeric.\nIf no default is provided, the style property's default is used in these circumstances."
                        }
                    },
                    function_stop: {
                        type: "array",
                        minimum: 0,
                        maximum: 22,
                        value: ["number", "color"],
                        length: 2,
                        doc: "Zoom level and value pair."
                    },
                    expression: {
                        type: "array",
                        value: "*",
                        minimum: 1,
                        doc: "An expression defines a function that can be used for data-driven style properties or feature filters."
                    },
                    expression_name: {
                        doc: "",
                        type: "enum",
                        values: {
                            let: {
                                doc: 'Binds expressions to named variables, which can then be referenced in the result expression using ["var", "variable_name"].',
                                group: "Variable binding",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            var: {
                                doc: 'References variable bound using "let".',
                                group: "Variable binding",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            literal: {
                                doc: "Provides a literal array or object value.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            array: {
                                doc: "Asserts that the input is an array (optionally with a specific item type and length).  If, when the input expression is evaluated, it is not of the asserted type, then this assertion will cause the whole expression to be aborted.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            at: {
                                doc: "Retrieves an item from an array.",
                                group: "Lookup",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            case: {
                                doc: "Selects the first output whose corresponding test condition evaluates to true, or the fallback value otherwise.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            match: {
                                doc: 'Selects the output whose label value matches the input value, or the fallback value if no match is found. The input can be any expression (e.g. `["get", "building_type"]`). Each label must be either:\n * a single literal value; or\n * an array of literal values, whose values must be all strings or all numbers (e.g. `[100, 101]` or `["c", "b"]`). The input matches if any of the values in the array matches, similar to the deprecated `"in"` operator.\n\nEach label must be unique. If the input type does not match the type of the labels, the result will be the fallback value.',
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            coalesce: {
                                doc: "Evaluates each expression in turn until the first non-null value is obtained, and returns that value.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            step: {
                                doc: 'Produces discrete, stepped results by evaluating a piecewise-constant function defined by pairs of input and output values ("stops"). The `input` may be any numeric expression (e.g., `["get", "population"]`). Stop inputs must be numeric literals in strictly ascending order. Returns the output value of the stop just less than the input, or the first input if the input is less than the first stop.',
                                group: "Ramps, scales, curves",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.42.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            interpolate: {
                                doc: 'Produces continuous, smooth results by interpolating between pairs of input and output values ("stops"). The `input` may be any numeric expression (e.g., `["get", "population"]`). Stop inputs must be numeric literals in strictly ascending order. The output type must be `number`, `array<number>`, or `color`.\n\nInterpolation types:\n- `["linear"]`: interpolates linearly between the pair of stops just less than and just greater than the input.\n- `["exponential", base]`: interpolates exponentially between the stops just less than and just greater than the input. `base` controls the rate at which the output increases: higher values make the output increase more towards the high end of the range. With values close to 1 the output increases linearly.\n- `["cubic-bezier", x1, y1, x2, y2]`: interpolates using the cubic bezier curve defined by the given control points.',
                                group: "Ramps, scales, curves",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.42.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "interpolate-hcl": {
                                doc: 'Produces continuous, smooth results by interpolating between pairs of input and output values ("stops"). Works like `interpolate`, but the output type must be `color`, and the interpolation is performed in the Hue-Chroma-Luminance color space.',
                                group: "Ramps, scales, curves",
                                "sdk-support": {"basic functionality": {js: "0.49.0"}}
                            },
                            "interpolate-lab": {
                                doc: 'Produces continuous, smooth results by interpolating between pairs of input and output values ("stops"). Works like `interpolate`, but the output type must be `color`, and the interpolation is performed in the CIELAB color space.',
                                group: "Ramps, scales, curves",
                                "sdk-support": {"basic functionality": {js: "0.49.0"}}
                            },
                            ln2: {
                                doc: "Returns mathematical constant ln(2).",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            pi: {
                                doc: "Returns the mathematical constant pi.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            e: {
                                doc: "Returns the mathematical constant e.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            typeof: {
                                doc: "Returns a string describing the type of the given value.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            string: {
                                doc: "Asserts that the input value is a string. If multiple values are provided, each one is evaluated in order until a string is obtained. If none of the inputs are strings, the expression is an error.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            number: {
                                doc: "Asserts that the input value is a number. If multiple values are provided, each one is evaluated in order until a number is obtained. If none of the inputs are numbers, the expression is an error.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            boolean: {
                                doc: "Asserts that the input value is a boolean. If multiple values are provided, each one is evaluated in order until a boolean is obtained. If none of the inputs are booleans, the expression is an error.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            object: {
                                doc: "Asserts that the input value is an object. If multiple values are provided, each one is evaluated in order until an object is obtained. If none of the inputs are objects, the expression is an error.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            collator: {
                                doc: "Returns a `collator` for use in locale-dependent comparison operations. The `case-sensitive` and `diacritic-sensitive` options default to `false`. The `locale` argument specifies the IETF language tag of the locale to use. If none is provided, the default locale is used. If the requested locale is not available, the `collator` will use a system-defined fallback locale. Use `resolved-locale` to test the results of locale fallback behavior.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.45.0",
                                        android: "6.5.0",
                                        ios: "4.2.0",
                                        macos: "0.9.0"
                                    }
                                }
                            },
                            format: {
                                doc: "Returns `formatted` text containing annotations for use in mixed-format `text-field` entries. If set, the `text-font` argument overrides the font specified by the root layout properties. If set, the `font-scale` argument specifies a scaling factor relative to the `text-size` specified in the root layout properties.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.48.0",
                                        android: "6.7.0",
                                        ios: "4.6.0",
                                        macos: "0.12.0"
                                    }
                                }
                            },
                            "number-format": {
                                doc: "Converts the input number into a string representation using the providing formatting rules. If set, the `locale` argument specifies the locale to use, as a BCP 47 language tag. If set, the `currency` argument specifies an ISO 4217 code to use for currency-style formatting. If set, the `min-fraction-digits` and `max-fraction-digits` arguments specify the minimum and maximum number of fractional digits to include.",
                                group: "Types",
                                "sdk-support": {"basic functionality": {js: "0.54.0"}}
                            },
                            "to-string": {
                                doc: 'Converts the input value to a string. If the input is `null`, the result is `""`. If the input is a boolean, the result is `"true"` or `"false"`. If the input is a number, it is converted to a string as specified by the ["NumberToString" algorithm](https://tc39.github.io/ecma262/#sec-tostring-applied-to-the-number-type) of the ECMAScript Language Specification. If the input is a color, it is converted to a string of the form `"rgba(r,g,b,a)"`, where `r`, `g`, and `b` are numerals ranging from 0 to 255, and `a` ranges from 0 to 1. Otherwise, the input is converted to a string in the format specified by the [`JSON.stringify`](https://tc39.github.io/ecma262/#sec-json.stringify) function of the ECMAScript Language Specification.',
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "to-number": {
                                doc: 'Converts the input value to a number, if possible. If the input is `null` or `false`, the result is 0. If the input is `true`, the result is 1. If the input is a string, it is converted to a number as specified by the ["ToNumber Applied to the String Type" algorithm](https://tc39.github.io/ecma262/#sec-tonumber-applied-to-the-string-type) of the ECMAScript Language Specification. If multiple values are provided, each one is evaluated in order until the first successful conversion is obtained. If none of the inputs can be converted, the expression is an error.',
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "to-boolean": {
                                doc: "Converts the input value to a boolean. The result is `false` when then input is an empty string, 0, `false`, `null`, or `NaN`; otherwise it is `true`.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "to-rgba": {
                                doc: "Returns a four-element array containing the input color's red, green, blue, and alpha components, in that order.",
                                group: "Color",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "to-color": {
                                doc: "Converts the input value to a color. If multiple values are provided, each one is evaluated in order until the first successful conversion is obtained. If none of the inputs can be converted, the expression is an error.",
                                group: "Types",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            rgb: {
                                doc: "Creates a color value from red, green, and blue components, which must range between 0 and 255, and an alpha component of 1. If any component is out of range, the expression is an error.",
                                group: "Color",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            rgba: {
                                doc: "Creates a color value from red, green, blue components, which must range between 0 and 255, and an alpha component which must range between 0 and 1. If any component is out of range, the expression is an error.",
                                group: "Color",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            get: {
                                doc: "Retrieves a property value from the current feature's properties, or from another object if a second argument is provided. Returns null if the requested property is missing.",
                                group: "Lookup",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            has: {
                                doc: "Tests for the presence of an property value in the current feature's properties, or from another object if a second argument is provided.",
                                group: "Lookup",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            length: {
                                doc: "Gets the length of an array or string.",
                                group: "Lookup",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            properties: {
                                doc: 'Gets the feature properties object.  Note that in some cases, it may be more efficient to use ["get", "property_name"] directly.',
                                group: "Feature data",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "feature-state": {
                                doc: "Retrieves a property value from the current feature's state. Returns null if the requested property is not present on the feature's state. A feature's state is not part of the GeoJSON or vector tile data, and must be set programmatically on each feature. Note that [\"feature-state\"] can only be used with paint properties that support data-driven styling.",
                                group: "Feature data",
                                "sdk-support": {"basic functionality": {js: "0.46.0"}}
                            },
                            "geometry-type": {
                                doc: "Gets the feature's geometry type: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon.",
                                group: "Feature data",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            id: {
                                doc: "Gets the feature's id, if it has one.",
                                group: "Feature data",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            zoom: {
                                doc: 'Gets the current zoom level.  Note that in style layout and paint properties, ["zoom"] may only appear as the input to a top-level "step" or "interpolate" expression.',
                                group: "Zoom",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "heatmap-density": {
                                doc: "Gets the kernel density estimation of a pixel in a heatmap layer, which is a relative measure of how many data points are crowded around a particular pixel. Can only be used in the `heatmap-color` property.",
                                group: "Heatmap",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "line-progress": {
                                doc: "Gets the progress along a gradient line. Can only be used in the `line-gradient` property.",
                                group: "Feature data",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.45.0",
                                        android: "6.5.0",
                                        ios: "4.6.0",
                                        macos: "0.12.0"
                                    }
                                }
                            },
                            accumulated: {
                                doc: "Gets the value of a cluster property accumulated so far. Can only be used in the `clusterProperties` option of a clustered GeoJSON source.",
                                group: "Feature data",
                                "sdk-support": {"basic functionality": {js: "0.53.0"}}
                            },
                            "+": {
                                doc: "Returns the sum of the inputs.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "*": {
                                doc: "Returns the product of the inputs.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "-": {
                                doc: "For two inputs, returns the result of subtracting the second input from the first. For a single input, returns the result of subtracting it from 0.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "/": {
                                doc: "Returns the result of floating point division of the first input by the second.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "%": {
                                doc: "Returns the remainder after integer division of the first input by the second.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "^": {
                                doc: "Returns the result of raising the first input to the power specified by the second.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            sqrt: {
                                doc: "Returns the square root of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.42.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            log10: {
                                doc: "Returns the base-ten logarithm of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            ln: {
                                doc: "Returns the natural logarithm of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            log2: {
                                doc: "Returns the base-two logarithm of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            sin: {
                                doc: "Returns the sine of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            cos: {
                                doc: "Returns the cosine of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            tan: {
                                doc: "Returns the tangent of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            asin: {
                                doc: "Returns the arcsine of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            acos: {
                                doc: "Returns the arccosine of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            atan: {
                                doc: "Returns the arctangent of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            min: {
                                doc: "Returns the minimum value of the inputs.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            max: {
                                doc: "Returns the maximum value of the inputs.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            round: {
                                doc: 'Rounds the input to the nearest integer. Halfway values are rounded away from zero. For example, `["round", -1.5]` evaluates to -2.',
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.45.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            abs: {
                                doc: "Returns the absolute value of the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.45.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            ceil: {
                                doc: "Returns the smallest integer that is greater than or equal to the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.45.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            floor: {
                                doc: "Returns the largest integer that is less than or equal to the input.",
                                group: "Math",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.45.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "==": {
                                doc: "Returns `true` if the input values are equal, `false` otherwise. The comparison is strictly typed: values of different runtime types are always considered unequal. Cases where the types are known to be different at parse time are considered invalid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }, collator: {js: "0.45.0", android: "6.5.0", ios: "4.2.0", macos: "0.9.0"}
                                }
                            },
                            "!=": {
                                doc: "Returns `true` if the input values are not equal, `false` otherwise. The comparison is strictly typed: values of different runtime types are always considered unequal. Cases where the types are known to be different at parse time are considered invalid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }, collator: {js: "0.45.0", android: "6.5.0", ios: "4.2.0", macos: "0.9.0"}
                                }
                            },
                            ">": {
                                doc: "Returns `true` if the first input is strictly greater than the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }, collator: {js: "0.45.0", android: "6.5.0", ios: "4.2.0", macos: "0.9.0"}
                                }
                            },
                            "<": {
                                doc: "Returns `true` if the first input is strictly less than the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }, collator: {js: "0.45.0", android: "6.5.0", ios: "4.2.0", macos: "0.9.0"}
                                }
                            },
                            ">=": {
                                doc: "Returns `true` if the first input is greater than or equal to the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }, collator: {js: "0.45.0", android: "6.5.0", ios: "4.2.0", macos: "0.9.0"}
                                }
                            },
                            "<=": {
                                doc: "Returns `true` if the first input is less than or equal to the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }, collator: {js: "0.45.0", android: "6.5.0", ios: "4.2.0", macos: "0.9.0"}
                                }
                            },
                            all: {
                                doc: "Returns `true` if all the inputs are `true`, `false` otherwise. The inputs are evaluated in order, and evaluation is short-circuiting: once an input expression evaluates to `false`, the result is `false` and no further input expressions are evaluated.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            any: {
                                doc: "Returns `true` if any of the inputs are `true`, `false` otherwise. The inputs are evaluated in order, and evaluation is short-circuiting: once an input expression evaluates to `true`, the result is `true` and no further input expressions are evaluated.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "!": {
                                doc: "Logical negation. Returns `true` if the input is `false`, and `false` if the input is `true`.",
                                group: "Decision",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "is-supported-script": {
                                doc: "Returns `true` if the input string is expected to render legibly. Returns `false` if the input string contains sections that cannot be rendered without potential loss of meaning (e.g. Indic scripts that require complex text shaping, or right-to-left scripts if the the `mapbox-gl-rtl-text` plugin is not in use in Mapbox GL JS).",
                                group: "String"
                            },
                            upcase: {
                                doc: "Returns the input string converted to uppercase. Follows the Unicode Default Case Conversion algorithm and the locale-insensitive case mappings in the Unicode Character Database.",
                                group: "String",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            downcase: {
                                doc: "Returns the input string converted to lowercase. Follows the Unicode Default Case Conversion algorithm and the locale-insensitive case mappings in the Unicode Character Database.",
                                group: "String",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            concat: {
                                doc: "Returns a `string` consisting of the concatenation of the inputs. Each input is converted to a string as if by `to-string`.",
                                group: "String",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.41.0",
                                        android: "6.0.0",
                                        ios: "4.0.0",
                                        macos: "0.7.0"
                                    }
                                }
                            },
                            "resolved-locale": {
                                doc: "Returns the IETF language tag of the locale being used by the provided `collator`. This can be used to determine the default system locale, or to determine if a requested locale was successfully loaded.",
                                group: "String",
                                "sdk-support": {
                                    "basic functionality": {
                                        js: "0.45.0",
                                        android: "6.5.0",
                                        ios: "4.2.0",
                                        macos: "0.9.0"
                                    }
                                }
                            }
                        }
                    },
                    light: {
                        anchor: {
                            type: "enum",
                            default: "viewport",
                            values: {
                                map: {doc: "The position of the light source is aligned to the rotation of the map."},
                                viewport: {doc: "The position of the light source is aligned to the rotation of the viewport."}
                            },
                            "property-type": "data-constant",
                            transition: !1,
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            doc: "Whether extruded geometries are lit relative to the map or viewport.",
                            example: "map",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }
                            }
                        },
                        position: {
                            type: "array",
                            default: [1.15, 210, 30],
                            length: 3,
                            value: "number",
                            "property-type": "data-constant",
                            transition: !0,
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            doc: "Position of the light source relative to lit (extruded) geometries, in [r radial coordinate, a azimuthal angle, p polar angle] where r indicates the distance from the center of the base of an object to its light, a indicates the position of the light relative to 0° (0° when `light.anchor` is set to `viewport` corresponds to the top of the viewport, or 0° when `light.anchor` is set to `map` corresponds to due north, and degrees proceed clockwise), and p indicates the height of the light (from 0°, directly above, to 180°, directly below).",
                            example: [1.5, 90, 80],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }
                            }
                        },
                        color: {
                            type: "color",
                            "property-type": "data-constant",
                            default: "#ffffff",
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            transition: !0,
                            doc: "Color tint for lighting extruded geometries.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }
                            }
                        },
                        intensity: {
                            type: "number",
                            "property-type": "data-constant",
                            default: .5,
                            minimum: 0,
                            maximum: 1,
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            transition: !0,
                            doc: "Intensity of lighting (on a scale from 0 to 1). Higher numbers will present as more extreme contrast.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }
                            }
                        }
                    },
                    paint: ["paint_fill", "paint_line", "paint_circle", "paint_heatmap", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_hillshade", "paint_background"],
                    paint_fill: {
                        "fill-antialias": {
                            type: "boolean",
                            default: !0,
                            doc: "Whether or not the fill should be antialiased.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "fill-opacity": {
                            type: "number",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            doc: "The opacity of the entire fill layer. In contrast to the `fill-color`, this value will also affect the 1px stroke around the fill, if the stroke is used.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.21.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "fill-color": {
                            type: "color",
                            default: "#000000",
                            doc: "The color of the filled part of this layer. This color can be specified as `rgba` with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used.",
                            transition: !0,
                            requires: [{"!": "fill-pattern"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.19.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "fill-outline-color": {
                            type: "color",
                            doc: "The outline color of the fill. Matches the value of `fill-color` if unspecified.",
                            transition: !0,
                            requires: [{"!": "fill-pattern"}, {"fill-antialias": !0}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.19.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "fill-translate": {
                            type: "array",
                            value: "number",
                            length: 2,
                            default: [0, 0],
                            transition: !0,
                            units: "pixels",
                            doc: "The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "fill-translate-anchor": {
                            type: "enum",
                            values: {
                                map: {doc: "The fill is translated relative to the map."},
                                viewport: {doc: "The fill is translated relative to the viewport."}
                            },
                            doc: "Controls the frame of reference for `fill-translate`.",
                            default: "map",
                            requires: ["fill-translate"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "fill-pattern": {
                            type: "string",
                            transition: !0,
                            doc: "Name of image in sprite to use for drawing image fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                },
                                "data-driven styling": {js: "0.49.0", android: "6.5.0", macos: "0.11.0", ios: "4.4.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "cross-faded-data-driven"
                        }
                    },
                    "paint_fill-extrusion": {
                        "fill-extrusion-opacity": {
                            type: "number",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            doc: "The opacity of the entire fill extrusion layer. This is rendered on a per-layer, not per-feature, basis, and data-driven styling is not available.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "fill-extrusion-color": {
                            type: "color",
                            default: "#000000",
                            doc: "The base color of the extruded fill. The extrusion's surfaces will be shaded differently based on this color in combination with the root `light` settings. If this color is specified as `rgba` with an alpha component, the alpha component will be ignored; use `fill-extrusion-opacity` to set layer opacity.",
                            transition: !0,
                            requires: [{"!": "fill-extrusion-pattern"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }, "data-driven styling": {js: "0.27.0", android: "5.1.0", ios: "3.6.0", macos: "0.5.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "fill-extrusion-translate": {
                            type: "array",
                            value: "number",
                            length: 2,
                            default: [0, 0],
                            transition: !0,
                            units: "pixels",
                            doc: "The geometry's offset. Values are [x, y] where negatives indicate left and up (on the flat plane), respectively.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "fill-extrusion-translate-anchor": {
                            type: "enum",
                            values: {
                                map: {doc: "The fill extrusion is translated relative to the map."},
                                viewport: {doc: "The fill extrusion is translated relative to the viewport."}
                            },
                            doc: "Controls the frame of reference for `fill-extrusion-translate`.",
                            default: "map",
                            requires: ["fill-extrusion-translate"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "fill-extrusion-pattern": {
                            type: "string",
                            transition: !0,
                            doc: "Name of image in sprite to use for drawing images on extruded fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                },
                                "data-driven styling": {js: "0.49.0", android: "6.5.0", macos: "0.11.0", ios: "4.4.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "cross-faded-data-driven"
                        },
                        "fill-extrusion-height": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            units: "meters",
                            doc: "The height with which to extrude this layer.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }, "data-driven styling": {js: "0.27.0", android: "5.1.0", ios: "3.6.0", macos: "0.5.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "fill-extrusion-base": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            units: "meters",
                            doc: "The height with which to extrude the base of this layer. Must be less than or equal to `fill-extrusion-height`.",
                            transition: !0,
                            requires: ["fill-extrusion-height"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.27.0",
                                    android: "5.1.0",
                                    ios: "3.6.0",
                                    macos: "0.5.0"
                                }, "data-driven styling": {js: "0.27.0", android: "5.1.0", ios: "3.6.0", macos: "0.5.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "fill-extrusion-vertical-gradient": {
                            type: "boolean",
                            default: !0,
                            doc: "Whether to apply a vertical gradient to the sides of a fill-extrusion layer. If true, sides will be shaded slightly darker farther down.",
                            transition: !1,
                            "sdk-support": {"basic functionality": {js: "0.50.0", ios: "4.7.0", macos: "0.13.0"}},
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        }
                    },
                    paint_line: {
                        "line-opacity": {
                            type: "number",
                            doc: "The opacity at which the line will be drawn.",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.29.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "line-color": {
                            type: "color",
                            doc: "The color with which the line will be drawn.",
                            default: "#000000",
                            transition: !0,
                            requires: [{"!": "line-pattern"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.23.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "line-translate": {
                            type: "array",
                            value: "number",
                            length: 2,
                            default: [0, 0],
                            transition: !0,
                            units: "pixels",
                            doc: "The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "line-translate-anchor": {
                            type: "enum",
                            values: {
                                map: {doc: "The line is translated relative to the map."},
                                viewport: {doc: "The line is translated relative to the viewport."}
                            },
                            doc: "Controls the frame of reference for `line-translate`.",
                            default: "map",
                            requires: ["line-translate"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "line-width": {
                            type: "number",
                            default: 1,
                            minimum: 0,
                            transition: !0,
                            units: "pixels",
                            doc: "Stroke thickness.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.39.0", android: "5.2.0", ios: "3.7.0", macos: "0.6.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "line-gap-width": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            doc: "Draws a line casing outside of a line's actual path. Value indicates the width of the inner gap.",
                            transition: !0,
                            units: "pixels",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.29.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "line-offset": {
                            type: "number",
                            default: 0,
                            doc: "The line's offset. For linear features, a positive value offsets the line to the right, relative to the direction of the line, and a negative value to the left. For polygon features, a positive value results in an inset, and a negative value results in an outset.",
                            transition: !0,
                            units: "pixels",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.12.1",
                                    android: "3.0.0",
                                    ios: "3.1.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.29.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "line-blur": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            transition: !0,
                            units: "pixels",
                            doc: "Blur applied to the line, in pixels.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.29.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "line-dasharray": {
                            type: "array",
                            value: "number",
                            doc: "Specifies the lengths of the alternating dashes and gaps that form the dash pattern. The lengths are later scaled by the line width. To convert a dash length to pixels, multiply the length by the current line width. Note that GeoJSON sources with `lineMetrics: true` specified won't render dashed lines to the expected scale. Also note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
                            minimum: 0,
                            transition: !0,
                            units: "line widths",
                            requires: [{"!": "line-pattern"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "cross-faded"
                        },
                        "line-pattern": {
                            type: "string",
                            transition: !0,
                            doc: "Name of image in sprite to use for drawing image lines. For seamless patterns, image width must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                },
                                "data-driven styling": {js: "0.49.0", android: "6.5.0", macos: "0.11.0", ios: "4.4.0"}
                            },
                            expression: {interpolated: !1, parameters: ["zoom", "feature"]},
                            "property-type": "cross-faded-data-driven"
                        },
                        "line-gradient": {
                            type: "color",
                            doc: 'Defines a gradient with which to color a line feature. Can only be used with GeoJSON sources that specify `"lineMetrics": true`.',
                            transition: !1,
                            requires: [{"!": "line-dasharray"}, {"!": "line-pattern"}, {
                                source: "geojson",
                                has: {lineMetrics: !0}
                            }],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.45.0",
                                    android: "6.5.0",
                                    ios: "4.4.0",
                                    macos: "0.11.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["line-progress"]},
                            "property-type": "color-ramp"
                        }
                    },
                    paint_circle: {
                        "circle-radius": {
                            type: "number",
                            default: 5,
                            minimum: 0,
                            transition: !0,
                            units: "pixels",
                            doc: "Circle radius.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.18.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "circle-color": {
                            type: "color",
                            default: "#000000",
                            doc: "The fill color of the circle.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.18.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "circle-blur": {
                            type: "number",
                            default: 0,
                            doc: "Amount to blur the circle. 1 blurs the circle such that only the centerpoint is full opacity.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.20.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "circle-opacity": {
                            type: "number",
                            doc: "The opacity at which the circle will be drawn.",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.20.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "circle-translate": {
                            type: "array",
                            value: "number",
                            length: 2,
                            default: [0, 0],
                            transition: !0,
                            units: "pixels",
                            doc: "The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "circle-translate-anchor": {
                            type: "enum",
                            values: {
                                map: {doc: "The circle is translated relative to the map."},
                                viewport: {doc: "The circle is translated relative to the viewport."}
                            },
                            doc: "Controls the frame of reference for `circle-translate`.",
                            default: "map",
                            requires: ["circle-translate"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "circle-pitch-scale": {
                            type: "enum",
                            values: {
                                map: {doc: "Circles are scaled according to their apparent distance to the camera."},
                                viewport: {doc: "Circles are not scaled."}
                            },
                            default: "map",
                            doc: "Controls the scaling behavior of the circle when the map is pitched.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.21.0",
                                    android: "4.2.0",
                                    ios: "3.4.0",
                                    macos: "0.2.1"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "circle-pitch-alignment": {
                            type: "enum",
                            values: {
                                map: {doc: "The circle is aligned to the plane of the map."},
                                viewport: {doc: "The circle is aligned to the plane of the viewport."}
                            },
                            default: "viewport",
                            doc: "Orientation of circle when map is pitched.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.39.0",
                                    android: "5.2.0",
                                    ios: "3.7.0",
                                    macos: "0.6.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "circle-stroke-width": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            transition: !0,
                            units: "pixels",
                            doc: "The width of the circle's stroke. Strokes are placed outside of the `circle-radius`.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.29.0",
                                    android: "5.0.0",
                                    ios: "3.5.0",
                                    macos: "0.4.0"
                                }, "data-driven styling": {js: "0.29.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "circle-stroke-color": {
                            type: "color",
                            default: "#000000",
                            doc: "The stroke color of the circle.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.29.0",
                                    android: "5.0.0",
                                    ios: "3.5.0",
                                    macos: "0.4.0"
                                }, "data-driven styling": {js: "0.29.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "circle-stroke-opacity": {
                            type: "number",
                            doc: "The opacity of the circle's stroke.",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.29.0",
                                    android: "5.0.0",
                                    ios: "3.5.0",
                                    macos: "0.4.0"
                                }, "data-driven styling": {js: "0.29.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        }
                    },
                    paint_heatmap: {
                        "heatmap-radius": {
                            type: "number",
                            default: 30,
                            minimum: 1,
                            transition: !0,
                            units: "pixels",
                            doc: "Radius of influence of one heatmap point in pixels. Increasing the value makes the heatmap smoother, but less detailed.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.41.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {js: "0.43.0", android: "6.0.0", ios: "4.0.0", macos: "0.7.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "heatmap-weight": {
                            type: "number",
                            default: 1,
                            minimum: 0,
                            transition: !1,
                            doc: "A measure of how much an individual point contributes to the heatmap. A value of 10 would be equivalent to having 10 points of weight 1 in the same spot. Especially useful when combined with clustering.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.41.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {js: "0.41.0", android: "6.0.0", ios: "4.0.0", macos: "0.7.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "heatmap-intensity": {
                            type: "number",
                            default: 1,
                            minimum: 0,
                            transition: !0,
                            doc: "Similar to `heatmap-weight` but controls the intensity of the heatmap globally. Primarily used for adjusting the heatmap based on zoom level.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.41.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "heatmap-color": {
                            type: "color",
                            default: ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(0, 0, 255, 0)", .1, "royalblue", .3, "cyan", .5, "lime", .7, "yellow", 1, "red"],
                            doc: 'Defines the color of each pixel based on its density value in a heatmap.  Should be an expression that uses `["heatmap-density"]` as input.',
                            transition: !1,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.41.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["heatmap-density"]},
                            "property-type": "color-ramp"
                        },
                        "heatmap-opacity": {
                            type: "number",
                            doc: "The global opacity at which the heatmap layer will be drawn.",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.41.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        }
                    },
                    paint_symbol: {
                        "icon-opacity": {
                            doc: "The opacity at which the icon will be drawn.",
                            type: "number",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "icon-color": {
                            type: "color",
                            default: "#000000",
                            transition: !0,
                            doc: "The color of the icon. This can only be used with sdf icons.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "icon-halo-color": {
                            type: "color",
                            default: "rgba(0, 0, 0, 0)",
                            transition: !0,
                            doc: "The color of the icon's halo. Icon halos can only be used with SDF icons.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "icon-halo-width": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            transition: !0,
                            units: "pixels",
                            doc: "Distance of halo to the icon outline.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "icon-halo-blur": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            transition: !0,
                            units: "pixels",
                            doc: "Fade out the halo towards the outside.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "icon-translate": {
                            type: "array",
                            value: "number",
                            length: 2,
                            default: [0, 0],
                            transition: !0,
                            units: "pixels",
                            doc: "Distance that the icon's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.",
                            requires: ["icon-image"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "icon-translate-anchor": {
                            type: "enum",
                            values: {
                                map: {doc: "Icons are translated relative to the map."},
                                viewport: {doc: "Icons are translated relative to the viewport."}
                            },
                            doc: "Controls the frame of reference for `icon-translate`.",
                            default: "map",
                            requires: ["icon-image", "icon-translate"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-opacity": {
                            type: "number",
                            doc: "The opacity at which the text will be drawn.",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "text-color": {
                            type: "color",
                            doc: "The color with which the text will be drawn.",
                            default: "#000000",
                            transition: !0,
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "text-halo-color": {
                            type: "color",
                            default: "rgba(0, 0, 0, 0)",
                            transition: !0,
                            doc: "The color of the text's halo, which helps it stand out from backgrounds.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "text-halo-width": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            transition: !0,
                            units: "pixels",
                            doc: "Distance of halo to the font outline. Max text halo width is 1/4 of the font-size.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "text-halo-blur": {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            transition: !0,
                            units: "pixels",
                            doc: "The halo's fadeout distance towards the outside.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {js: "0.33.0", android: "5.0.0", ios: "3.5.0", macos: "0.4.0"}
                            },
                            expression: {interpolated: !0, parameters: ["zoom", "feature", "feature-state"]},
                            "property-type": "data-driven"
                        },
                        "text-translate": {
                            type: "array",
                            value: "number",
                            length: 2,
                            default: [0, 0],
                            transition: !0,
                            units: "pixels",
                            doc: "Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.",
                            requires: ["text-field"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "text-translate-anchor": {
                            type: "enum",
                            values: {
                                map: {doc: "The text is translated relative to the map."},
                                viewport: {doc: "The text is translated relative to the viewport."}
                            },
                            doc: "Controls the frame of reference for `text-translate`.",
                            default: "map",
                            requires: ["text-field", "text-translate"],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        }
                    },
                    paint_raster: {
                        "raster-opacity": {
                            type: "number",
                            doc: "The opacity at which the image will be drawn.",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "raster-hue-rotate": {
                            type: "number",
                            default: 0,
                            period: 360,
                            transition: !0,
                            units: "degrees",
                            doc: "Rotates hues around the color wheel.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "raster-brightness-min": {
                            type: "number",
                            doc: "Increase or reduce the brightness of the image. The value is the minimum brightness.",
                            default: 0,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "raster-brightness-max": {
                            type: "number",
                            doc: "Increase or reduce the brightness of the image. The value is the maximum brightness.",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "raster-saturation": {
                            type: "number",
                            doc: "Increase or reduce the saturation of the image.",
                            default: 0,
                            minimum: -1,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "raster-contrast": {
                            type: "number",
                            doc: "Increase or reduce the contrast of the image.",
                            default: 0,
                            minimum: -1,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "raster-resampling": {
                            type: "enum",
                            doc: "The resampling/interpolation method to use for overscaling, also known as texture magnification filter",
                            values: {
                                linear: {doc: "(Bi)linear filtering interpolates pixel values using the weighted average of the four closest original source pixels creating a smooth but blurry look when overscaled"},
                                nearest: {doc: "Nearest neighbor filtering interpolates pixel values using the nearest original source pixel creating a sharp but pixelated look when overscaled"}
                            },
                            default: "linear",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.47.0",
                                    android: "6.3.0",
                                    ios: "4.2.0",
                                    macos: "0.9.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "raster-fade-duration": {
                            type: "number",
                            default: 300,
                            minimum: 0,
                            transition: !1,
                            units: "milliseconds",
                            doc: "Fade duration when a new tile is added.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        }
                    },
                    paint_hillshade: {
                        "hillshade-illumination-direction": {
                            type: "number",
                            default: 335,
                            minimum: 0,
                            maximum: 359,
                            doc: "The direction of the light source used to generate the hillshading with 0 as the top of the viewport if `hillshade-illumination-anchor` is set to `viewport` and due north if `hillshade-illumination-anchor` is set to `map`.",
                            transition: !1,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.43.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "hillshade-illumination-anchor": {
                            type: "enum",
                            values: {
                                map: {doc: "The hillshade illumination is relative to the north direction."},
                                viewport: {doc: "The hillshade illumination is relative to the top of the viewport."}
                            },
                            default: "viewport",
                            doc: "Direction of light source when map is rotated.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.43.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "hillshade-exaggeration": {
                            type: "number",
                            doc: "Intensity of the hillshade",
                            default: .5,
                            minimum: 0,
                            maximum: 1,
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.43.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "hillshade-shadow-color": {
                            type: "color",
                            default: "#000000",
                            doc: "The shading color of areas that face away from the light source.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.43.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "hillshade-highlight-color": {
                            type: "color",
                            default: "#FFFFFF",
                            doc: "The shading color of areas that faces towards the light source.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.43.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "hillshade-accent-color": {
                            type: "color",
                            default: "#000000",
                            doc: "The shading color used to accentuate rugged terrain like sharp cliffs and gorges.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.43.0",
                                    android: "6.0.0",
                                    ios: "4.0.0",
                                    macos: "0.7.0"
                                }, "data-driven styling": {}
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        }
                    },
                    paint_background: {
                        "background-color": {
                            type: "color",
                            default: "#000000",
                            doc: "The color with which the background will be drawn.",
                            transition: !0,
                            requires: [{"!": "background-pattern"}],
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        },
                        "background-pattern": {
                            type: "string",
                            transition: !0,
                            doc: "Name of image in sprite to use for drawing an image background. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.",
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }
                            },
                            expression: {interpolated: !1, parameters: ["zoom"]},
                            "property-type": "cross-faded"
                        },
                        "background-opacity": {
                            type: "number",
                            default: 1,
                            minimum: 0,
                            maximum: 1,
                            doc: "The opacity at which the background will be drawn.",
                            transition: !0,
                            "sdk-support": {
                                "basic functionality": {
                                    js: "0.10.0",
                                    android: "2.0.1",
                                    ios: "2.0.0",
                                    macos: "0.1.0"
                                }
                            },
                            expression: {interpolated: !0, parameters: ["zoom"]},
                            "property-type": "data-constant"
                        }
                    },
                    transition: {
                        duration: {
                            type: "number",
                            default: 300,
                            minimum: 0,
                            units: "milliseconds",
                            doc: "Time allotted for transitions to complete."
                        },
                        delay: {
                            type: "number",
                            default: 0,
                            minimum: 0,
                            units: "milliseconds",
                            doc: "Length of time before a transition begins."
                        }
                    },
                    "property-type": {
                        "data-driven": {
                            type: "property-type",
                            doc: "Property is interpolable and can be represented using a property expression."
                        },
                        "cross-faded": {
                            type: "property-type",
                            doc: "Property is non-interpolable; rather, its values will be cross-faded to smoothly transition between integer zooms."
                        },
                        "cross-faded-data-driven": {
                            type: "property-type",
                            doc: "Property is non-interpolable; rather, its values will be cross-faded to smoothly transition between integer zooms. It can be represented using a property expression."
                        },
                        "color-ramp": {
                            type: "property-type",
                            doc: "Property should be specified using a color ramp from which the output color can be sampled based on a property calculation."
                        },
                        "data-constant": {
                            type: "property-type",
                            doc: "Property is interpolable but cannot be represented using a property expression."
                        },
                        constant: {
                            type: "property-type",
                            doc: "Property is constant across all zoom levels and property values."
                        }
                    }
                }, i = /("(?:[^\\"]|\\.)*")|[:,]/g, n = function (e, t) {
                    var o, r, n;
                    return t = t || {}, o = JSON.stringify([1], void 0, void 0 === t.indent ? 2 : t.indent).slice(2, -3), r = "" === o ? 1 / 0 : void 0 === t.maxLength ? 80 : t.maxLength, n = t.replacer, function e(t, a, s) {
                        var l, u, p, c, d, h, f, y, m, g, v, b;
                        if (t && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 === (v = JSON.stringify(t, n))) return v;
                        if (f = r - a.length - s, v.length <= f && (m = v.replace(i, function (e, t) {
                                return t || e + " "
                            })).length <= f) return m;
                        if (null != n && (t = JSON.parse(v), n = void 0), "object" == typeof t && null !== t) {
                            if (y = a + o, p = [], u = 0, Array.isArray(t)) for (g = "[", l = "]", f = t.length; u < f; u++) p.push(e(t[u], y, u === f - 1 ? 0 : 1) || "null"); else for (g = "{", l = "}", f = (h = Object.keys(t)).length; u < f; u++) c = h[u], d = JSON.stringify(c) + ": ", void 0 !== (b = e(t[c], y, d.length + (u === f - 1 ? 0 : 1))) && p.push(d + b);
                            if (p.length > 0) return [g, o + p.join(",\n" + y), l].join("\n" + a)
                        }
                        return v
                    }(e, "", 0)
                };

                function a(e, t) {
                    var o = {};
                    for (var r in t) void 0 !== e[r] && (o[r] = e[r]);
                    for (var i in e) void 0 === o[i] && (o[i] = e[i]);
                    return o
                }

                var s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

                function l(e, t) {
                    return e(t = {exports: {}}, t.exports), t.exports
                }

                var u = l(function (e, t) {
                    !function (o) {
                        var r = t && !t.nodeType && t, i = e && !e.nodeType && e, n = "object" == typeof s && s;
                        n.global !== n && n.window !== n && n.self !== n || (o = n);
                        var a, l, u = 2147483647, p = 36, c = 1, d = 26, h = 38, f = 700, y = 72, m = 128, g = "-",
                            v = /^xn--/, b = /[^\x20-\x7E]/, x = /[\x2E\u3002\uFF0E\uFF61]/g, w = {
                                overflow: "Overflow: input needs wider integers to process",
                                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input"
                            }, k = p - c, j = Math.floor, S = String.fromCharCode;

                        function T(e) {
                            throw RangeError(w[e])
                        }

                        function z(e, t) {
                            for (var o = e.length, r = []; o--;) r[o] = t(e[o]);
                            return r
                        }

                        function _(e, t) {
                            var o = e.split("@"), r = "";
                            return o.length > 1 && (r = o[0] + "@", e = o[1]), r + z((e = e.replace(x, ".")).split("."), t).join(".")
                        }

                        function A(e) {
                            for (var t, o, r = [], i = 0, n = e.length; i < n;) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < n ? 56320 == (64512 & (o = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & o) + 65536) : (r.push(t), i--) : r.push(t);
                            return r
                        }

                        function O(e) {
                            return z(e, function (e) {
                                var t = "";
                                return e > 65535 && (t += S((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += S(e)
                            }).join("")
                        }

                        function C(e, t) {
                            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                        }

                        function R(e, t, o) {
                            var r = 0;
                            for (e = o ? j(e / f) : e >> 1, e += j(e / t); e > k * d >> 1; r += p) e = j(e / k);
                            return j(r + (k + 1) * e / (e + h))
                        }

                        function M(e) {
                            var t, o, r, i, n, a, s, l, h, f, v, b = [], x = e.length, w = 0, k = m, S = y;
                            for ((o = e.lastIndexOf(g)) < 0 && (o = 0), r = 0; r < o; ++r) e.charCodeAt(r) >= 128 && T("not-basic"), b.push(e.charCodeAt(r));
                            for (i = o > 0 ? o + 1 : 0; i < x;) {
                                for (n = w, a = 1, s = p; i >= x && T("invalid-input"), ((l = (v = e.charCodeAt(i++)) - 48 < 10 ? v - 22 : v - 65 < 26 ? v - 65 : v - 97 < 26 ? v - 97 : p) >= p || l > j((u - w) / a)) && T("overflow"), w += l * a, !(l < (h = s <= S ? c : s >= S + d ? d : s - S)); s += p) a > j(u / (f = p - h)) && T("overflow"), a *= f;
                                S = R(w - n, t = b.length + 1, 0 == n), j(w / t) > u - k && T("overflow"), k += j(w / t), w %= t, b.splice(w++, 0, k)
                            }
                            return O(b)
                        }

                        function E(e) {
                            var t, o, r, i, n, a, s, l, h, f, v, b, x, w, k, z = [];
                            for (b = (e = A(e)).length, t = m, o = 0, n = y, a = 0; a < b; ++a) (v = e[a]) < 128 && z.push(S(v));
                            for (r = i = z.length, i && z.push(g); r < b;) {
                                for (s = u, a = 0; a < b; ++a) (v = e[a]) >= t && v < s && (s = v);
                                for (s - t > j((u - o) / (x = r + 1)) && T("overflow"), o += (s - t) * x, t = s, a = 0; a < b; ++a) if ((v = e[a]) < t && ++o > u && T("overflow"), v == t) {
                                    for (l = o, h = p; !(l < (f = h <= n ? c : h >= n + d ? d : h - n)); h += p) k = l - f, w = p - f, z.push(S(C(f + k % w, 0))), l = j(k / w);
                                    z.push(S(C(l, 0))), n = R(o, x, r == i), o = 0, ++r
                                }
                                ++o, ++t
                            }
                            return z.join("")
                        }

                        if (a = {
                                version: "1.3.2",
                                ucs2: {decode: A, encode: O},
                                decode: M,
                                encode: E,
                                toASCII: function (e) {
                                    return _(e, function (e) {
                                        return b.test(e) ? "xn--" + E(e) : e
                                    })
                                },
                                toUnicode: function (e) {
                                    return _(e, function (e) {
                                        return v.test(e) ? M(e.slice(4).toLowerCase()) : e
                                    })
                                }
                            }, r && i) if (e.exports == r) i.exports = a; else for (l in a) a.hasOwnProperty(l) && (r[l] = a[l]); else o.punycode = a
                    }(s)
                }), p = {
                    isString: function (e) {
                        return "string" == typeof e
                    }, isObject: function (e) {
                        return "object" == typeof e && null !== e
                    }, isNull: function (e) {
                        return null === e
                    }, isNullOrUndefined: function (e) {
                        return null == e
                    }
                };

                function c(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                var d = function (e, t, o, r) {
                    t = t || "&", o = o || "=";
                    var i = {};
                    if ("string" != typeof e || 0 === e.length) return i;
                    var n = /\+/g;
                    e = e.split(t);
                    var a = 1e3;
                    r && "number" == typeof r.maxKeys && (a = r.maxKeys);
                    var s = e.length;
                    a > 0 && s > a && (s = a);
                    for (var l = 0; l < s; ++l) {
                        var u, p, d, h, f = e[l].replace(n, "%20"), y = f.indexOf(o);
                        y >= 0 ? (u = f.substr(0, y), p = f.substr(y + 1)) : (u = f, p = ""), d = decodeURIComponent(u), h = decodeURIComponent(p), c(i, d) ? Array.isArray(i[d]) ? i[d].push(h) : i[d] = [i[d], h] : i[d] = h
                    }
                    return i
                }, h = function (e) {
                    switch (typeof e) {
                        case"string":
                            return e;
                        case"boolean":
                            return e ? "true" : "false";
                        case"number":
                            return isFinite(e) ? e : "";
                        default:
                            return ""
                    }
                }, f = function (e, t, o, r) {
                    return t = t || "&", o = o || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function (r) {
                        var i = encodeURIComponent(h(r)) + o;
                        return Array.isArray(e[r]) ? e[r].map(function (e) {
                            return i + encodeURIComponent(h(e))
                        }).join(t) : i + encodeURIComponent(h(e[r]))
                    }).join(t) : r ? encodeURIComponent(h(r)) + o + encodeURIComponent(h(e)) : ""
                }, y = l(function (e, t) {
                    t.decode = t.parse = d, t.encode = t.stringify = f
                }), m = (y.decode, y.parse, y.encode, y.stringify, I), g = function (e, t) {
                    return I(e, !1, !0).resolve(t)
                }, v = function (e, t) {
                    if (!e) return t;
                    return I(e, !1, !0).resolveObject(t)
                }, b = function (e) {
                    p.isString(e) && (e = I(e));
                    if (!(e instanceof w)) return w.prototype.format.call(e);
                    return e.format()
                }, x = w;

                function w() {
                    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                }

                var k = /^([a-z0-9.+-]+:)/i, j = /:[0-9]*$/, S = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                    T = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                    z = ["'"].concat(T), _ = ["%", "/", "?", ";", "#"].concat(z), A = ["/", "?", "#"],
                    O = /^[+a-z0-9A-Z_-]{0,63}$/, C = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                    R = {javascript: !0, "javascript:": !0}, M = {javascript: !0, "javascript:": !0}, E = {
                        http: !0,
                        https: !0,
                        ftp: !0,
                        gopher: !0,
                        file: !0,
                        "http:": !0,
                        "https:": !0,
                        "ftp:": !0,
                        "gopher:": !0,
                        "file:": !0
                    };

                function I(e, t, o) {
                    if (e && p.isObject(e) && e instanceof w) return e;
                    var r = new w;
                    return r.parse(e, t, o), r
                }

                w.prototype.parse = function (e, t, o) {
                    if (!p.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                    var r = e.indexOf("?"), i = -1 !== r && r < e.indexOf("#") ? "?" : "#", n = e.split(i);
                    n[0] = n[0].replace(/\\/g, "/");
                    var a = e = n.join(i);
                    if (a = a.trim(), !o && 1 === e.split("#").length) {
                        var s = S.exec(a);
                        if (s) return this.path = a, this.href = a, this.pathname = s[1], s[2] ? (this.search = s[2], this.query = t ? y.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                    }
                    var l = k.exec(a);
                    if (l) {
                        var c = (l = l[0]).toLowerCase();
                        this.protocol = c, a = a.substr(l.length)
                    }
                    if (o || l || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                        var d = "//" === a.substr(0, 2);
                        !d || l && M[l] || (a = a.substr(2), this.slashes = !0)
                    }
                    if (!M[l] && (d || l && !E[l])) {
                        for (var h, f, m = -1, g = 0; g < A.length; g++) {
                            -1 !== (v = a.indexOf(A[g])) && (-1 === m || v < m) && (m = v)
                        }
                        -1 !== (f = -1 === m ? a.lastIndexOf("@") : a.lastIndexOf("@", m)) && (h = a.slice(0, f), a = a.slice(f + 1), this.auth = decodeURIComponent(h)), m = -1;
                        for (g = 0; g < _.length; g++) {
                            var v;
                            -1 !== (v = a.indexOf(_[g])) && (-1 === m || v < m) && (m = v)
                        }
                        -1 === m && (m = a.length), this.host = a.slice(0, m), a = a.slice(m), this.parseHost(), this.hostname = this.hostname || "";
                        var b = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                        if (!b) for (var x = this.hostname.split(/\./), w = (g = 0, x.length); g < w; g++) {
                            var j = x[g];
                            if (j && !j.match(O)) {
                                for (var T = "", I = 0, P = j.length; I < P; I++) j.charCodeAt(I) > 127 ? T += "x" : T += j[I];
                                if (!T.match(O)) {
                                    var q = x.slice(0, g), L = x.slice(g + 1), N = j.match(C);
                                    N && (q.push(N[1]), L.unshift(N[2])), L.length && (a = "/" + L.join(".") + a), this.hostname = q.join(".");
                                    break
                                }
                            }
                        }
                        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), b || (this.hostname = u.toASCII(this.hostname));
                        var F = this.port ? ":" + this.port : "", D = this.hostname || "";
                        this.host = D + F, this.href += this.host, b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
                    }
                    if (!R[c]) for (g = 0, w = z.length; g < w; g++) {
                        var B = z[g];
                        if (-1 !== a.indexOf(B)) {
                            var U = encodeURIComponent(B);
                            U === B && (U = escape(B)), a = a.split(B).join(U)
                        }
                    }
                    var G = a.indexOf("#");
                    -1 !== G && (this.hash = a.substr(G), a = a.slice(0, G));
                    var J = a.indexOf("?");
                    if (-1 !== J ? (this.search = a.substr(J), this.query = a.substr(J + 1), t && (this.query = y.parse(this.query)), a = a.slice(0, J)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), E[c] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                        F = this.pathname || "";
                        var W = this.search || "";
                        this.path = F + W
                    }
                    return this.href = this.format(), this
                }, w.prototype.format = function () {
                    var e = this.auth || "";
                    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                    var t = this.protocol || "", o = this.pathname || "", r = this.hash || "", i = !1, n = "";
                    this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && p.isObject(this.query) && Object.keys(this.query).length && (n = y.stringify(this.query));
                    var a = this.search || n && "?" + n || "";
                    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || E[t]) && !1 !== i ? (i = "//" + (i || ""), o && "/" !== o.charAt(0) && (o = "/" + o)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), t + i + (o = o.replace(/[?#]/g, function (e) {
                        return encodeURIComponent(e)
                    })) + (a = a.replace("#", "%23")) + r
                }, w.prototype.resolve = function (e) {
                    return this.resolveObject(I(e, !1, !0)).format()
                }, w.prototype.resolveObject = function (e) {
                    if (p.isString(e)) {
                        var t = new w;
                        t.parse(e, !1, !0), e = t
                    }
                    for (var o = new w, r = Object.keys(this), i = 0; i < r.length; i++) {
                        var n = r[i];
                        o[n] = this[n]
                    }
                    if (o.hash = e.hash, "" === e.href) return o.href = o.format(), o;
                    if (e.slashes && !e.protocol) {
                        for (var a = Object.keys(e), s = 0; s < a.length; s++) {
                            var l = a[s];
                            "protocol" !== l && (o[l] = e[l])
                        }
                        return E[o.protocol] && o.hostname && !o.pathname && (o.path = o.pathname = "/"), o.href = o.format(), o
                    }
                    if (e.protocol && e.protocol !== o.protocol) {
                        if (!E[e.protocol]) {
                            for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                                var d = u[c];
                                o[d] = e[d]
                            }
                            return o.href = o.format(), o
                        }
                        if (o.protocol = e.protocol, e.host || M[e.protocol]) o.pathname = e.pathname; else {
                            for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift());) ;
                            e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), o.pathname = h.join("/")
                        }
                        if (o.search = e.search, o.query = e.query, o.host = e.host || "", o.auth = e.auth, o.hostname = e.hostname || e.host, o.port = e.port, o.pathname || o.search) {
                            var f = o.pathname || "", y = o.search || "";
                            o.path = f + y
                        }
                        return o.slashes = o.slashes || e.slashes, o.href = o.format(), o
                    }
                    var m = o.pathname && "/" === o.pathname.charAt(0),
                        g = e.host || e.pathname && "/" === e.pathname.charAt(0), v = g || m || o.host && e.pathname,
                        b = v, x = o.pathname && o.pathname.split("/") || [],
                        k = (h = e.pathname && e.pathname.split("/") || [], o.protocol && !E[o.protocol]);
                    if (k && (o.hostname = "", o.port = null, o.host && ("" === x[0] ? x[0] = o.host : x.unshift(o.host)), o.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), v = v && ("" === h[0] || "" === x[0])), g) o.host = e.host || "" === e.host ? e.host : o.host, o.hostname = e.hostname || "" === e.hostname ? e.hostname : o.hostname, o.search = e.search, o.query = e.query, x = h; else if (h.length) x || (x = []), x.pop(), x = x.concat(h), o.search = e.search, o.query = e.query; else if (!p.isNullOrUndefined(e.search)) {
                        if (k) o.hostname = o.host = x.shift(), (_ = !!(o.host && o.host.indexOf("@") > 0) && o.host.split("@")) && (o.auth = _.shift(), o.host = o.hostname = _.shift());
                        return o.search = e.search, o.query = e.query, p.isNull(o.pathname) && p.isNull(o.search) || (o.path = (o.pathname ? o.pathname : "") + (o.search ? o.search : "")), o.href = o.format(), o
                    }
                    if (!x.length) return o.pathname = null, o.search ? o.path = "/" + o.search : o.path = null, o.href = o.format(), o;
                    for (var j = x.slice(-1)[0], S = (o.host || e.host || x.length > 1) && ("." === j || ".." === j) || "" === j, T = 0, z = x.length; z >= 0; z--) "." === (j = x[z]) ? x.splice(z, 1) : ".." === j ? (x.splice(z, 1), T++) : T && (x.splice(z, 1), T--);
                    if (!v && !b) for (; T--; T) x.unshift("..");
                    !v || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), S && "/" !== x.join("/").substr(-1) && x.push("");
                    var _, A = "" === x[0] || x[0] && "/" === x[0].charAt(0);
                    k && (o.hostname = o.host = A ? "" : x.length ? x.shift() : "", (_ = !!(o.host && o.host.indexOf("@") > 0) && o.host.split("@")) && (o.auth = _.shift(), o.host = o.hostname = _.shift()));
                    return (v = v || o.host && x.length) && !A && x.unshift(""), x.length ? o.pathname = x.join("/") : (o.pathname = null, o.path = null), p.isNull(o.pathname) && p.isNull(o.search) || (o.path = (o.pathname ? o.pathname : "") + (o.search ? o.search : "")), o.auth = e.auth || o.auth, o.slashes = o.slashes || e.slashes, o.href = o.format(), o
                }, w.prototype.parseHost = function () {
                    var e = this.host, t = j.exec(e);
                    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                };
                var P = {parse: m, resolve: g, resolveObject: v, format: b, Url: x};

                function q(e) {
                    for (var t = 0; t < r.layout.length; t++) for (var o in r[r.layout[t]]) if (o === e) return r[r.layout[t]][o];
                    for (var i = 0; i < r.paint.length; i++) for (var n in r[r.paint[i]]) if (n === e) return r[r.paint[i]][n];
                    return null
                }

                function L(e, t) {
                    for (var o in e.sources) t(e.sources[o])
                }

                function N(e, t) {
                    for (var o = 0, r = e.layers; o < r.length; o += 1) {
                        t(r[o])
                    }
                }

                function F(e, t, o) {
                    function r(e, t) {
                        var r = e[t];
                        r && Object.keys(r).forEach(function (i) {
                            o({
                                path: [e.id, t, i], key: i, value: r[i], reference: q(i), set: function (e) {
                                    r[i] = e
                                }
                            })
                        })
                    }

                    N(e, function (e) {
                        t.paint && r(e, "paint"), t.layout && r(e, "layout")
                    })
                }

                function D(e, t) {
                    for (var o in e) 0 === o.indexOf("layout") && t(e[o], o)
                }

                function B(e, t) {
                    for (var o in e) 0 === o.indexOf("paint") && t(e[o], o)
                }

                function U(e, t) {
                    return "string" == typeof t && "@" === t[0] ? U(e, e.constants[t]) : t
                }

                function G(e, t, o) {
                    e[o] = e[t], delete e[t]
                }

                function J(e) {
                    var t, o, r;
                    e.version = 8, L(e, function (e) {
                        "video" === e.type && void 0 !== e.url && G(e, "url", "urls"), "video" === e.type && e.coordinates.forEach(function (e) {
                            return e.reverse()
                        })
                    }), N(e, function (e) {
                        D(e, function (e) {
                            void 0 !== e["symbol-min-distance"] && G(e, "symbol-min-distance", "symbol-spacing")
                        }), B(e, function (e) {
                            void 0 !== e["background-image"] && G(e, "background-image", "background-pattern"), void 0 !== e["line-image"] && G(e, "line-image", "line-pattern"), void 0 !== e["fill-image"] && G(e, "fill-image", "fill-pattern")
                        })
                    }), F(e, {paint: !0, layout: !0}, function (t) {
                        var o = U(e, t.value);
                        (function (e) {
                            return Array.isArray(e.stops)
                        })(o) && o.stops.forEach(function (t) {
                            t[1] = U(e, t[1])
                        }), t.set(o)
                    }), delete e.constants, N(e, function (e) {
                        D(e, function (e) {
                            delete e["text-max-size"], delete e["icon-max-size"]
                        }), B(e, function (t) {
                            t["text-size"] && (e.layout || (e.layout = {}), e.layout["text-size"] = t["text-size"], delete t["text-size"]), t["icon-size"] && (e.layout || (e.layout = {}), e.layout["icon-size"] = t["icon-size"], delete t["icon-size"])
                        })
                    }), e.glyphs && (e.glyphs = (t = e.glyphs, o = P.parse(t), r = o.pathname.split("/"), "mapbox:" !== o.protocol ? t : "fontstack" === o.hostname ? "mapbox://fonts/mapbox/{fontstack}/{range}.pbf" : "fonts" === o.hostname ? "mapbox://fonts/" + r[2] + "/{fontstack}/{range}.pbf" : void 0)), N(e, function (e) {
                        D(e, function (e) {
                            e["text-font"] && (e["text-font"] = function (e) {
                                function t(e) {
                                    return e.split(",").map(function (e) {
                                        return e.trim()
                                    })
                                }

                                if (Array.isArray(e)) return e;
                                if ("string" == typeof e) return t(e);
                                if ("object" == typeof e) return e.stops.forEach(function (e) {
                                    e[1] = t(e[1])
                                }), e;
                                throw new Error("unexpected font value")
                            }(e["text-font"]))
                        })
                    });
                    for (var i = 0, n = e.layers.length - 1; n >= 0; n--) {
                        if ("symbol" !== e.layers[n].type) {
                            i = n + 1;
                            break
                        }
                    }
                    var a = e.layers.splice(i);
                    return a.reverse(), e.layers = e.layers.concat(a), e
                }

                function W(e) {
                    for (var t = arguments, o = [], r = arguments.length - 1; r-- > 0;) o[r] = t[r + 1];
                    for (var i = 0, n = o; i < n.length; i += 1) {
                        var a = n[i];
                        for (var s in a) e[s] = a[s]
                    }
                    return e
                }

                var $ = function (e) {
                    function t(t, o) {
                        e.call(this, o), this.message = o, this.key = t
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
                }(Error), V = function (e, t) {
                    void 0 === t && (t = []), this.parent = e, this.bindings = {};
                    for (var o = 0, r = t; o < r.length; o += 1) {
                        var i = r[o], n = i[0], a = i[1];
                        this.bindings[n] = a
                    }
                };
                V.prototype.concat = function (e) {
                    return new V(this, e)
                }, V.prototype.get = function (e) {
                    if (this.bindings[e]) return this.bindings[e];
                    if (this.parent) return this.parent.get(e);
                    throw new Error(e + " not found in scope.")
                }, V.prototype.has = function (e) {
                    return !!this.bindings[e] || !!this.parent && this.parent.has(e)
                };
                var Y = {kind: "null"}, H = {kind: "number"}, K = {kind: "string"}, Z = {kind: "boolean"},
                    X = {kind: "color"}, Q = {kind: "object"}, ee = {kind: "value"}, te = {kind: "collator"},
                    oe = {kind: "formatted"};

                function re(e, t) {
                    return {kind: "array", itemType: e, N: t}
                }

                function ie(e) {
                    if ("array" === e.kind) {
                        var t = ie(e.itemType);
                        return "number" == typeof e.N ? "array<" + t + ", " + e.N + ">" : "value" === e.itemType.kind ? "array" : "array<" + t + ">"
                    }
                    return e.kind
                }

                var ne = [Y, H, K, Z, X, oe, Q, re(ee)];

                function ae(e, t) {
                    if ("error" === t.kind) return null;
                    if ("array" === e.kind) {
                        if ("array" === t.kind && (0 === t.N && "value" === t.itemType.kind || !ae(e.itemType, t.itemType)) && ("number" != typeof e.N || e.N === t.N)) return null
                    } else {
                        if (e.kind === t.kind) return null;
                        if ("value" === e.kind) for (var o = 0, r = ne; o < r.length; o += 1) {
                            if (!ae(r[o], t)) return null
                        }
                    }
                    return "Expected " + ie(e) + " but found " + ie(t) + " instead."
                }

                var se = l(function (e, t) {
                    var o = {
                        transparent: [0, 0, 0, 0],
                        aliceblue: [240, 248, 255, 1],
                        antiquewhite: [250, 235, 215, 1],
                        aqua: [0, 255, 255, 1],
                        aquamarine: [127, 255, 212, 1],
                        azure: [240, 255, 255, 1],
                        beige: [245, 245, 220, 1],
                        bisque: [255, 228, 196, 1],
                        black: [0, 0, 0, 1],
                        blanchedalmond: [255, 235, 205, 1],
                        blue: [0, 0, 255, 1],
                        blueviolet: [138, 43, 226, 1],
                        brown: [165, 42, 42, 1],
                        burlywood: [222, 184, 135, 1],
                        cadetblue: [95, 158, 160, 1],
                        chartreuse: [127, 255, 0, 1],
                        chocolate: [210, 105, 30, 1],
                        coral: [255, 127, 80, 1],
                        cornflowerblue: [100, 149, 237, 1],
                        cornsilk: [255, 248, 220, 1],
                        crimson: [220, 20, 60, 1],
                        cyan: [0, 255, 255, 1],
                        darkblue: [0, 0, 139, 1],
                        darkcyan: [0, 139, 139, 1],
                        darkgoldenrod: [184, 134, 11, 1],
                        darkgray: [169, 169, 169, 1],
                        darkgreen: [0, 100, 0, 1],
                        darkgrey: [169, 169, 169, 1],
                        darkkhaki: [189, 183, 107, 1],
                        darkmagenta: [139, 0, 139, 1],
                        darkolivegreen: [85, 107, 47, 1],
                        darkorange: [255, 140, 0, 1],
                        darkorchid: [153, 50, 204, 1],
                        darkred: [139, 0, 0, 1],
                        darksalmon: [233, 150, 122, 1],
                        darkseagreen: [143, 188, 143, 1],
                        darkslateblue: [72, 61, 139, 1],
                        darkslategray: [47, 79, 79, 1],
                        darkslategrey: [47, 79, 79, 1],
                        darkturquoise: [0, 206, 209, 1],
                        darkviolet: [148, 0, 211, 1],
                        deeppink: [255, 20, 147, 1],
                        deepskyblue: [0, 191, 255, 1],
                        dimgray: [105, 105, 105, 1],
                        dimgrey: [105, 105, 105, 1],
                        dodgerblue: [30, 144, 255, 1],
                        firebrick: [178, 34, 34, 1],
                        floralwhite: [255, 250, 240, 1],
                        forestgreen: [34, 139, 34, 1],
                        fuchsia: [255, 0, 255, 1],
                        gainsboro: [220, 220, 220, 1],
                        ghostwhite: [248, 248, 255, 1],
                        gold: [255, 215, 0, 1],
                        goldenrod: [218, 165, 32, 1],
                        gray: [128, 128, 128, 1],
                        green: [0, 128, 0, 1],
                        greenyellow: [173, 255, 47, 1],
                        grey: [128, 128, 128, 1],
                        honeydew: [240, 255, 240, 1],
                        hotpink: [255, 105, 180, 1],
                        indianred: [205, 92, 92, 1],
                        indigo: [75, 0, 130, 1],
                        ivory: [255, 255, 240, 1],
                        khaki: [240, 230, 140, 1],
                        lavender: [230, 230, 250, 1],
                        lavenderblush: [255, 240, 245, 1],
                        lawngreen: [124, 252, 0, 1],
                        lemonchiffon: [255, 250, 205, 1],
                        lightblue: [173, 216, 230, 1],
                        lightcoral: [240, 128, 128, 1],
                        lightcyan: [224, 255, 255, 1],
                        lightgoldenrodyellow: [250, 250, 210, 1],
                        lightgray: [211, 211, 211, 1],
                        lightgreen: [144, 238, 144, 1],
                        lightgrey: [211, 211, 211, 1],
                        lightpink: [255, 182, 193, 1],
                        lightsalmon: [255, 160, 122, 1],
                        lightseagreen: [32, 178, 170, 1],
                        lightskyblue: [135, 206, 250, 1],
                        lightslategray: [119, 136, 153, 1],
                        lightslategrey: [119, 136, 153, 1],
                        lightsteelblue: [176, 196, 222, 1],
                        lightyellow: [255, 255, 224, 1],
                        lime: [0, 255, 0, 1],
                        limegreen: [50, 205, 50, 1],
                        linen: [250, 240, 230, 1],
                        magenta: [255, 0, 255, 1],
                        maroon: [128, 0, 0, 1],
                        mediumaquamarine: [102, 205, 170, 1],
                        mediumblue: [0, 0, 205, 1],
                        mediumorchid: [186, 85, 211, 1],
                        mediumpurple: [147, 112, 219, 1],
                        mediumseagreen: [60, 179, 113, 1],
                        mediumslateblue: [123, 104, 238, 1],
                        mediumspringgreen: [0, 250, 154, 1],
                        mediumturquoise: [72, 209, 204, 1],
                        mediumvioletred: [199, 21, 133, 1],
                        midnightblue: [25, 25, 112, 1],
                        mintcream: [245, 255, 250, 1],
                        mistyrose: [255, 228, 225, 1],
                        moccasin: [255, 228, 181, 1],
                        navajowhite: [255, 222, 173, 1],
                        navy: [0, 0, 128, 1],
                        oldlace: [253, 245, 230, 1],
                        olive: [128, 128, 0, 1],
                        olivedrab: [107, 142, 35, 1],
                        orange: [255, 165, 0, 1],
                        orangered: [255, 69, 0, 1],
                        orchid: [218, 112, 214, 1],
                        palegoldenrod: [238, 232, 170, 1],
                        palegreen: [152, 251, 152, 1],
                        paleturquoise: [175, 238, 238, 1],
                        palevioletred: [219, 112, 147, 1],
                        papayawhip: [255, 239, 213, 1],
                        peachpuff: [255, 218, 185, 1],
                        peru: [205, 133, 63, 1],
                        pink: [255, 192, 203, 1],
                        plum: [221, 160, 221, 1],
                        powderblue: [176, 224, 230, 1],
                        purple: [128, 0, 128, 1],
                        rebeccapurple: [102, 51, 153, 1],
                        red: [255, 0, 0, 1],
                        rosybrown: [188, 143, 143, 1],
                        royalblue: [65, 105, 225, 1],
                        saddlebrown: [139, 69, 19, 1],
                        salmon: [250, 128, 114, 1],
                        sandybrown: [244, 164, 96, 1],
                        seagreen: [46, 139, 87, 1],
                        seashell: [255, 245, 238, 1],
                        sienna: [160, 82, 45, 1],
                        silver: [192, 192, 192, 1],
                        skyblue: [135, 206, 235, 1],
                        slateblue: [106, 90, 205, 1],
                        slategray: [112, 128, 144, 1],
                        slategrey: [112, 128, 144, 1],
                        snow: [255, 250, 250, 1],
                        springgreen: [0, 255, 127, 1],
                        steelblue: [70, 130, 180, 1],
                        tan: [210, 180, 140, 1],
                        teal: [0, 128, 128, 1],
                        thistle: [216, 191, 216, 1],
                        tomato: [255, 99, 71, 1],
                        turquoise: [64, 224, 208, 1],
                        violet: [238, 130, 238, 1],
                        wheat: [245, 222, 179, 1],
                        white: [255, 255, 255, 1],
                        whitesmoke: [245, 245, 245, 1],
                        yellow: [255, 255, 0, 1],
                        yellowgreen: [154, 205, 50, 1]
                    };

                    function r(e) {
                        return (e = Math.round(e)) < 0 ? 0 : e > 255 ? 255 : e
                    }

                    function i(e) {
                        return e < 0 ? 0 : e > 1 ? 1 : e
                    }

                    function n(e) {
                        return "%" === e[e.length - 1] ? r(parseFloat(e) / 100 * 255) : r(parseInt(e))
                    }

                    function a(e) {
                        return "%" === e[e.length - 1] ? i(parseFloat(e) / 100) : i(parseFloat(e))
                    }

                    function s(e, t, o) {
                        return o < 0 ? o += 1 : o > 1 && (o -= 1), 6 * o < 1 ? e + (t - e) * o * 6 : 2 * o < 1 ? t : 3 * o < 2 ? e + (t - e) * (2 / 3 - o) * 6 : e
                    }

                    try {
                        t.parseCSSColor = function (e) {
                            var t, i = e.replace(/ /g, "").toLowerCase();
                            if (i in o) return o[i].slice();
                            if ("#" === i[0]) return 4 === i.length ? (t = parseInt(i.substr(1), 16)) >= 0 && t <= 4095 ? [(3840 & t) >> 4 | (3840 & t) >> 8, 240 & t | (240 & t) >> 4, 15 & t | (15 & t) << 4, 1] : null : 7 === i.length && (t = parseInt(i.substr(1), 16)) >= 0 && t <= 16777215 ? [(16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 1] : null;
                            var l = i.indexOf("("), u = i.indexOf(")");
                            if (-1 !== l && u + 1 === i.length) {
                                var p = i.substr(0, l), c = i.substr(l + 1, u - (l + 1)).split(","), d = 1;
                                switch (p) {
                                    case"rgba":
                                        if (4 !== c.length) return null;
                                        d = a(c.pop());
                                    case"rgb":
                                        return 3 !== c.length ? null : [n(c[0]), n(c[1]), n(c[2]), d];
                                    case"hsla":
                                        if (4 !== c.length) return null;
                                        d = a(c.pop());
                                    case"hsl":
                                        if (3 !== c.length) return null;
                                        var h = (parseFloat(c[0]) % 360 + 360) % 360 / 360, f = a(c[1]), y = a(c[2]),
                                            m = y <= .5 ? y * (f + 1) : y + f - y * f, g = 2 * y - m;
                                        return [r(255 * s(g, m, h + 1 / 3)), r(255 * s(g, m, h)), r(255 * s(g, m, h - 1 / 3)), d];
                                    default:
                                        return null
                                }
                            }
                            return null
                        }
                    } catch (e) {
                    }
                }).parseCSSColor, le = function (e, t, o, r) {
                    void 0 === r && (r = 1), this.r = e, this.g = t, this.b = o, this.a = r
                };
                le.parse = function (e) {
                    if (e) {
                        if (e instanceof le) return e;
                        if ("string" == typeof e) {
                            var t = se(e);
                            if (t) return new le(t[0] / 255 * t[3], t[1] / 255 * t[3], t[2] / 255 * t[3], t[3])
                        }
                    }
                }, le.prototype.toString = function () {
                    var e = this.toArray(), t = e[0], o = e[1], r = e[2], i = e[3];
                    return "rgba(" + Math.round(t) + "," + Math.round(o) + "," + Math.round(r) + "," + i + ")"
                }, le.prototype.toArray = function () {
                    var e = this.r, t = this.g, o = this.b, r = this.a;
                    return 0 === r ? [0, 0, 0, 0] : [255 * e / r, 255 * t / r, 255 * o / r, r]
                }, le.black = new le(0, 0, 0, 1), le.white = new le(1, 1, 1, 1), le.transparent = new le(0, 0, 0, 0), le.red = new le(1, 0, 0, 1);
                var ue = function (e, t, o) {
                    this.sensitivity = e ? t ? "variant" : "case" : t ? "accent" : "base", this.locale = o, this.collator = new Intl.Collator(this.locale ? this.locale : [], {
                        sensitivity: this.sensitivity,
                        usage: "search"
                    })
                };
                ue.prototype.compare = function (e, t) {
                    return this.collator.compare(e, t)
                }, ue.prototype.resolvedLocale = function () {
                    return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale
                };
                var pe = function (e, t, o) {
                    this.text = e, this.scale = t, this.fontStack = o
                }, ce = function (e) {
                    this.sections = e
                };

                function de(e, t, o, r) {
                    return "number" == typeof e && e >= 0 && e <= 255 && "number" == typeof t && t >= 0 && t <= 255 && "number" == typeof o && o >= 0 && o <= 255 ? void 0 === r || "number" == typeof r && r >= 0 && r <= 1 ? null : "Invalid rgba value [" + [e, t, o, r].join(", ") + "]: 'a' must be between 0 and 1." : "Invalid rgba value [" + ("number" == typeof r ? [e, t, o, r] : [e, t, o]).join(", ") + "]: 'r', 'g', and 'b' must be between 0 and 255."
                }

                function he(e) {
                    if (null === e) return Y;
                    if ("string" == typeof e) return K;
                    if ("boolean" == typeof e) return Z;
                    if ("number" == typeof e) return H;
                    if (e instanceof le) return X;
                    if (e instanceof ue) return te;
                    if (e instanceof ce) return oe;
                    if (Array.isArray(e)) {
                        for (var t, o = e.length, r = 0, i = e; r < i.length; r += 1) {
                            var n = he(i[r]);
                            if (t) {
                                if (t === n) continue;
                                t = ee;
                                break
                            }
                            t = n
                        }
                        return re(t || ee, o)
                    }
                    return Q
                }

                function fe(e) {
                    var t = typeof e;
                    return null === e ? "" : "string" === t || "number" === t || "boolean" === t ? String(e) : e instanceof le || e instanceof ce ? e.toString() : JSON.stringify(e)
                }

                ce.fromString = function (e) {
                    return new ce([new pe(e, null, null)])
                }, ce.prototype.toString = function () {
                    return this.sections.map(function (e) {
                        return e.text
                    }).join("")
                }, ce.prototype.serialize = function () {
                    for (var e = ["format"], t = 0, o = this.sections; t < o.length; t += 1) {
                        var r = o[t];
                        e.push(r.text);
                        var i = {};
                        r.fontStack && (i["text-font"] = ["literal", r.fontStack.split(",")]), r.scale && (i["font-scale"] = r.scale), e.push(i)
                    }
                    return e
                };
                var ye = function (e, t) {
                    this.type = e, this.value = t
                };
                ye.parse = function (e, t) {
                    if (2 !== e.length) return t.error("'literal' expression requires exactly one argument, but found " + (e.length - 1) + " instead.");
                    if (!function e(t) {
                            if (null === t) return !0;
                            if ("string" == typeof t) return !0;
                            if ("boolean" == typeof t) return !0;
                            if ("number" == typeof t) return !0;
                            if (t instanceof le) return !0;
                            if (t instanceof ue) return !0;
                            if (t instanceof ce) return !0;
                            if (Array.isArray(t)) {
                                for (var o = 0, r = t; o < r.length; o += 1) if (!e(r[o])) return !1;
                                return !0
                            }
                            if ("object" == typeof t) {
                                for (var i in t) if (!e(t[i])) return !1;
                                return !0
                            }
                            return !1
                        }(e[1])) return t.error("invalid value");
                    var o = e[1], r = he(o), i = t.expectedType;
                    return "array" !== r.kind || 0 !== r.N || !i || "array" !== i.kind || "number" == typeof i.N && 0 !== i.N || (r = i), new ye(r, o)
                }, ye.prototype.evaluate = function () {
                    return this.value
                }, ye.prototype.eachChild = function () {
                }, ye.prototype.possibleOutputs = function () {
                    return [this.value]
                }, ye.prototype.serialize = function () {
                    return "array" === this.type.kind || "object" === this.type.kind ? ["literal", this.value] : this.value instanceof le ? ["rgba"].concat(this.value.toArray()) : this.value instanceof ce ? this.value.serialize() : this.value
                };
                var me = function (e) {
                    this.name = "ExpressionEvaluationError", this.message = e
                };
                me.prototype.toJSON = function () {
                    return this.message
                };
                var ge = {string: K, number: H, boolean: Z, object: Q}, ve = function (e, t) {
                    this.type = e, this.args = t
                };
                ve.parse = function (e, t) {
                    if (e.length < 2) return t.error("Expected at least one argument.");
                    var o, r = 1, i = e[0];
                    if ("array" === i) {
                        var n, a;
                        if (e.length > 2) {
                            var s = e[1];
                            if ("string" != typeof s || !(s in ge) || "object" === s) return t.error('The item type argument of "array" must be one of string, number, boolean', 1);
                            n = ge[s], r++
                        } else n = ee;
                        if (e.length > 3) {
                            if (null !== e[2] && ("number" != typeof e[2] || e[2] < 0 || e[2] !== Math.floor(e[2]))) return t.error('The length argument to "array" must be a positive integer literal', 2);
                            a = e[2], r++
                        }
                        o = re(n, a)
                    } else o = ge[i];
                    for (var l = []; r < e.length; r++) {
                        var u = t.parse(e[r], r, ee);
                        if (!u) return null;
                        l.push(u)
                    }
                    return new ve(o, l)
                }, ve.prototype.evaluate = function (e) {
                    for (var t = 0; t < this.args.length; t++) {
                        var o = this.args[t].evaluate(e);
                        if (!ae(this.type, he(o))) return o;
                        if (t === this.args.length - 1) throw new me("Expected value to be of type " + ie(this.type) + ", but found " + ie(he(o)) + " instead.")
                    }
                    return null
                }, ve.prototype.eachChild = function (e) {
                    this.args.forEach(e)
                }, ve.prototype.possibleOutputs = function () {
                    var e;
                    return (e = []).concat.apply(e, this.args.map(function (e) {
                        return e.possibleOutputs()
                    }))
                }, ve.prototype.serialize = function () {
                    var e = this.type, t = [e.kind];
                    if ("array" === e.kind) {
                        var o = e.itemType;
                        if ("string" === o.kind || "number" === o.kind || "boolean" === o.kind) {
                            t.push(o.kind);
                            var r = e.N;
                            ("number" == typeof r || this.args.length > 1) && t.push(r)
                        }
                    }
                    return t.concat(this.args.map(function (e) {
                        return e.serialize()
                    }))
                };
                var be = function (e) {
                    this.type = oe, this.sections = e
                };
                be.parse = function (e, t) {
                    if (e.length < 3) return t.error("Expected at least two arguments.");
                    if ((e.length - 1) % 2 != 0) return t.error("Expected an even number of arguments.");
                    for (var o = [], r = 1; r < e.length - 1; r += 2) {
                        var i = t.parse(e[r], 1, ee);
                        if (!i) return null;
                        var n = i.type.kind;
                        if ("string" !== n && "value" !== n && "null" !== n) return t.error("Formatted text type must be 'string', 'value', or 'null'.");
                        var a = e[r + 1];
                        if ("object" != typeof a || Array.isArray(a)) return t.error("Format options argument must be an object.");
                        var s = null;
                        if (a["font-scale"] && !(s = t.parse(a["font-scale"], 1, H))) return null;
                        var l = null;
                        if (a["text-font"] && !(l = t.parse(a["text-font"], 1, re(K)))) return null;
                        o.push({text: i, scale: s, font: l})
                    }
                    return new be(o)
                }, be.prototype.evaluate = function (e) {
                    return new ce(this.sections.map(function (t) {
                        return new pe(fe(t.text.evaluate(e)), t.scale ? t.scale.evaluate(e) : null, t.font ? t.font.evaluate(e).join(",") : null)
                    }))
                }, be.prototype.eachChild = function (e) {
                    for (var t = 0, o = this.sections; t < o.length; t += 1) {
                        var r = o[t];
                        e(r.text), r.scale && e(r.scale), r.font && e(r.font)
                    }
                }, be.prototype.possibleOutputs = function () {
                    return [void 0]
                }, be.prototype.serialize = function () {
                    for (var e = ["format"], t = 0, o = this.sections; t < o.length; t += 1) {
                        var r = o[t];
                        e.push(r.text.serialize());
                        var i = {};
                        r.scale && (i["font-scale"] = r.scale.serialize()), r.font && (i["text-font"] = r.font.serialize()), e.push(i)
                    }
                    return e
                };
                var xe = {"to-boolean": Z, "to-color": X, "to-number": H, "to-string": K}, we = function (e, t) {
                    this.type = e, this.args = t
                };
                we.parse = function (e, t) {
                    if (e.length < 2) return t.error("Expected at least one argument.");
                    var o = e[0];
                    if (("to-boolean" === o || "to-string" === o) && 2 !== e.length) return t.error("Expected one argument.");
                    for (var r = xe[o], i = [], n = 1; n < e.length; n++) {
                        var a = t.parse(e[n], n, ee);
                        if (!a) return null;
                        i.push(a)
                    }
                    return new we(r, i)
                }, we.prototype.evaluate = function (e) {
                    if ("boolean" === this.type.kind) return Boolean(this.args[0].evaluate(e));
                    if ("color" === this.type.kind) {
                        for (var t, o, r = 0, i = this.args; r < i.length; r += 1) {
                            if (o = null, (t = i[r].evaluate(e)) instanceof le) return t;
                            if ("string" == typeof t) {
                                var n = e.parseColor(t);
                                if (n) return n
                            } else if (Array.isArray(t) && !(o = t.length < 3 || t.length > 4 ? "Invalid rbga value " + JSON.stringify(t) + ": expected an array containing either three or four numeric values." : de(t[0], t[1], t[2], t[3]))) return new le(t[0] / 255, t[1] / 255, t[2] / 255, t[3])
                        }
                        throw new me(o || "Could not parse color from value '" + ("string" == typeof t ? t : String(JSON.stringify(t))) + "'")
                    }
                    if ("number" === this.type.kind) {
                        for (var a = null, s = 0, l = this.args; s < l.length; s += 1) {
                            if (null === (a = l[s].evaluate(e))) return 0;
                            var u = Number(a);
                            if (!isNaN(u)) return u
                        }
                        throw new me("Could not convert " + JSON.stringify(a) + " to number.")
                    }
                    return "formatted" === this.type.kind ? ce.fromString(fe(this.args[0].evaluate(e))) : fe(this.args[0].evaluate(e))
                }, we.prototype.eachChild = function (e) {
                    this.args.forEach(e)
                }, we.prototype.possibleOutputs = function () {
                    var e;
                    return (e = []).concat.apply(e, this.args.map(function (e) {
                        return e.possibleOutputs()
                    }))
                }, we.prototype.serialize = function () {
                    if ("formatted" === this.type.kind) return new be([{
                        text: this.args[0],
                        scale: null,
                        font: null
                    }]).serialize();
                    var e = ["to-" + this.type.kind];
                    return this.eachChild(function (t) {
                        e.push(t.serialize())
                    }), e
                };
                var ke = ["Unknown", "Point", "LineString", "Polygon"], je = function () {
                    this.globals = null, this.feature = null, this.featureState = null, this._parseColorCache = {}
                };
                je.prototype.id = function () {
                    return this.feature && "id" in this.feature ? this.feature.id : null
                }, je.prototype.geometryType = function () {
                    return this.feature ? "number" == typeof this.feature.type ? ke[this.feature.type] : this.feature.type : null
                }, je.prototype.properties = function () {
                    return this.feature && this.feature.properties || {}
                }, je.prototype.parseColor = function (e) {
                    var t = this._parseColorCache[e];
                    return t || (t = this._parseColorCache[e] = le.parse(e)), t
                };
                var Se = function (e, t, o, r) {
                    this.name = e, this.type = t, this._evaluate = o, this.args = r
                };
                Se.prototype.evaluate = function (e) {
                    return this._evaluate(e, this.args)
                }, Se.prototype.eachChild = function (e) {
                    this.args.forEach(e)
                }, Se.prototype.possibleOutputs = function () {
                    return [void 0]
                }, Se.prototype.serialize = function () {
                    return [this.name].concat(this.args.map(function (e) {
                        return e.serialize()
                    }))
                }, Se.parse = function (e, t) {
                    var o, r = e[0], i = Se.definitions[r];
                    if (!i) return t.error('Unknown expression "' + r + '". If you wanted a literal array, use ["literal", [...]].', 0);
                    for (var n = Array.isArray(i) ? i[0] : i.type, a = Array.isArray(i) ? [[i[1], i[2]]] : i.overloads, s = a.filter(function (t) {
                        var o = t[0];
                        return !Array.isArray(o) || o.length === e.length - 1
                    }), l = null, u = 0, p = s; u < p.length; u += 1) {
                        var c = p[u], d = c[0], h = c[1];
                        l = new Ce(t.registry, t.path, null, t.scope);
                        for (var f = [], y = !1, m = 1; m < e.length; m++) {
                            var g = e[m], v = Array.isArray(d) ? d[m - 1] : d.type, b = l.parse(g, 1 + f.length, v);
                            if (!b) {
                                y = !0;
                                break
                            }
                            f.push(b)
                        }
                        if (!y) if (Array.isArray(d) && d.length !== f.length) l.error("Expected " + d.length + " arguments, but found " + f.length + " instead."); else {
                            for (var x = 0; x < f.length; x++) {
                                var w = Array.isArray(d) ? d[x] : d.type, k = f[x];
                                l.concat(x + 1).checkSubtype(w, k.type)
                            }
                            if (0 === l.errors.length) return new Se(r, n, h, f)
                        }
                    }
                    if (1 === s.length) (o = t.errors).push.apply(o, l.errors); else {
                        for (var j = (s.length ? s : a).map(function (e) {
                            var t, o = e[0];
                            return t = o, Array.isArray(t) ? "(" + t.map(ie).join(", ") + ")" : "(" + ie(t.type) + "...)"
                        }).join(" | "), S = [], T = 1; T < e.length; T++) {
                            var z = t.parse(e[T], 1 + S.length);
                            if (!z) return null;
                            S.push(ie(z.type))
                        }
                        t.error("Expected arguments of type " + j + ", but found (" + S.join(", ") + ") instead.")
                    }
                    return null
                }, Se.register = function (e, t) {
                    for (var o in Se.definitions = t, t) e[o] = Se
                };
                var Te = function (e, t, o) {
                    this.type = te, this.locale = o, this.caseSensitive = e, this.diacriticSensitive = t
                };

                function ze(e) {
                    if (e instanceof Se) {
                        if ("get" === e.name && 1 === e.args.length) return !1;
                        if ("feature-state" === e.name) return !1;
                        if ("has" === e.name && 1 === e.args.length) return !1;
                        if ("properties" === e.name || "geometry-type" === e.name || "id" === e.name) return !1;
                        if (/^filter-/.test(e.name)) return !1
                    }
                    var t = !0;
                    return e.eachChild(function (e) {
                        t && !ze(e) && (t = !1)
                    }), t
                }

                function _e(e) {
                    if (e instanceof Se && "feature-state" === e.name) return !1;
                    var t = !0;
                    return e.eachChild(function (e) {
                        t && !_e(e) && (t = !1)
                    }), t
                }

                function Ae(e, t) {
                    if (e instanceof Se && t.indexOf(e.name) >= 0) return !1;
                    var o = !0;
                    return e.eachChild(function (e) {
                        o && !Ae(e, t) && (o = !1)
                    }), o
                }

                Te.parse = function (e, t) {
                    if (2 !== e.length) return t.error("Expected one argument.");
                    var o = e[1];
                    if ("object" != typeof o || Array.isArray(o)) return t.error("Collator options argument must be an object.");
                    var r = t.parse(void 0 !== o["case-sensitive"] && o["case-sensitive"], 1, Z);
                    if (!r) return null;
                    var i = t.parse(void 0 !== o["diacritic-sensitive"] && o["diacritic-sensitive"], 1, Z);
                    if (!i) return null;
                    var n = null;
                    return o.locale && !(n = t.parse(o.locale, 1, K)) ? null : new Te(r, i, n)
                }, Te.prototype.evaluate = function (e) {
                    return new ue(this.caseSensitive.evaluate(e), this.diacriticSensitive.evaluate(e), this.locale ? this.locale.evaluate(e) : null)
                }, Te.prototype.eachChild = function (e) {
                    e(this.caseSensitive), e(this.diacriticSensitive), this.locale && e(this.locale)
                }, Te.prototype.possibleOutputs = function () {
                    return [void 0]
                }, Te.prototype.serialize = function () {
                    var e = {};
                    return e["case-sensitive"] = this.caseSensitive.serialize(), e["diacritic-sensitive"] = this.diacriticSensitive.serialize(), this.locale && (e.locale = this.locale.serialize()), ["collator", e]
                };
                var Oe = function (e, t) {
                    this.type = t.type, this.name = e, this.boundExpression = t
                };
                Oe.parse = function (e, t) {
                    if (2 !== e.length || "string" != typeof e[1]) return t.error("'var' expression requires exactly one string literal argument.");
                    var o = e[1];
                    return t.scope.has(o) ? new Oe(o, t.scope.get(o)) : t.error('Unknown variable "' + o + '". Make sure "' + o + '" has been bound in an enclosing "let" expression before using it.', 1)
                }, Oe.prototype.evaluate = function (e) {
                    return this.boundExpression.evaluate(e)
                }, Oe.prototype.eachChild = function () {
                }, Oe.prototype.possibleOutputs = function () {
                    return [void 0]
                }, Oe.prototype.serialize = function () {
                    return ["var", this.name]
                };
                var Ce = function (e, t, o, r, i) {
                    void 0 === t && (t = []), void 0 === r && (r = new V), void 0 === i && (i = []), this.registry = e, this.path = t, this.key = t.map(function (e) {
                        return "[" + e + "]"
                    }).join(""), this.scope = r, this.errors = i, this.expectedType = o
                };

                function Re(e, t) {
                    for (var o, r, i = e.length - 1, n = 0, a = i, s = 0; n <= a;) if (o = e[s = Math.floor((n + a) / 2)], r = e[s + 1], o <= t) {
                        if (s === i || t < r) return s;
                        n = s + 1
                    } else {
                        if (!(o > t)) throw new me("Input is not a number.");
                        a = s - 1
                    }
                    return 0
                }

                Ce.prototype.parse = function (e, t, o, r, i) {
                    return void 0 === i && (i = {}), t ? this.concat(t, o, r)._parse(e, i) : this._parse(e, i)
                }, Ce.prototype._parse = function (e, t) {
                    function o(e, t, o) {
                        return "assert" === o ? new ve(t, [e]) : "coerce" === o ? new we(t, [e]) : e
                    }

                    if (null !== e && "string" != typeof e && "boolean" != typeof e && "number" != typeof e || (e = ["literal", e]), Array.isArray(e)) {
                        if (0 === e.length) return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
                        var r = e[0];
                        if ("string" != typeof r) return this.error("Expression name must be a string, but found " + typeof r + ' instead. If you wanted a literal array, use ["literal", [...]].', 0), null;
                        var i = this.registry[r];
                        if (i) {
                            var n = i.parse(e, this);
                            if (!n) return null;
                            if (this.expectedType) {
                                var a = this.expectedType, s = n.type;
                                if ("string" !== a.kind && "number" !== a.kind && "boolean" !== a.kind && "object" !== a.kind && "array" !== a.kind || "value" !== s.kind) if ("color" !== a.kind && "formatted" !== a.kind || "value" !== s.kind && "string" !== s.kind) {
                                    if (this.checkSubtype(a, s)) return null
                                } else n = o(n, a, t.typeAnnotation || "coerce"); else n = o(n, a, t.typeAnnotation || "assert")
                            }
                            if (!(n instanceof ye) && function e(t) {
                                    if (t instanceof Oe) return e(t.boundExpression);
                                    if (t instanceof Se && "error" === t.name) return !1;
                                    if (t instanceof Te) return !1;
                                    var o = t instanceof we || t instanceof ve;
                                    var r = !0;
                                    t.eachChild(function (t) {
                                        r = o ? r && e(t) : r && t instanceof ye
                                    });
                                    if (!r) return !1;
                                    return ze(t) && Ae(t, ["zoom", "heatmap-density", "line-progress", "accumulated", "is-supported-script"])
                                }(n)) {
                                var l = new je;
                                try {
                                    n = new ye(n.type, n.evaluate(l))
                                } catch (e) {
                                    return this.error(e.message), null
                                }
                            }
                            return n
                        }
                        return this.error('Unknown expression "' + r + '". If you wanted a literal array, use ["literal", [...]].', 0)
                    }
                    return void 0 === e ? this.error("'undefined' value invalid. Use null instead.") : "object" == typeof e ? this.error('Bare objects invalid. Use ["literal", {...}] instead.') : this.error("Expected an array, but found " + typeof e + " instead.")
                }, Ce.prototype.concat = function (e, t, o) {
                    var r = "number" == typeof e ? this.path.concat(e) : this.path,
                        i = o ? this.scope.concat(o) : this.scope;
                    return new Ce(this.registry, r, t || null, i, this.errors)
                }, Ce.prototype.error = function (e) {
                    for (var t = arguments, o = [], r = arguments.length - 1; r-- > 0;) o[r] = t[r + 1];
                    var i = "" + this.key + o.map(function (e) {
                        return "[" + e + "]"
                    }).join("");
                    this.errors.push(new $(i, e))
                }, Ce.prototype.checkSubtype = function (e, t) {
                    var o = ae(e, t);
                    return o && this.error(o), o
                };
                var Me = function (e, t, o) {
                    this.type = e, this.input = t, this.labels = [], this.outputs = [];
                    for (var r = 0, i = o; r < i.length; r += 1) {
                        var n = i[r], a = n[0], s = n[1];
                        this.labels.push(a), this.outputs.push(s)
                    }
                };
                Me.parse = function (e, t) {
                    if (e.length - 1 < 4) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
                    if ((e.length - 1) % 2 != 0) return t.error("Expected an even number of arguments.");
                    var o = t.parse(e[1], 1, H);
                    if (!o) return null;
                    var r = [], i = null;
                    t.expectedType && "value" !== t.expectedType.kind && (i = t.expectedType);
                    for (var n = 1; n < e.length; n += 2) {
                        var a = 1 === n ? -1 / 0 : e[n], s = e[n + 1], l = n, u = n + 1;
                        if ("number" != typeof a) return t.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', l);
                        if (r.length && r[r.length - 1][0] >= a) return t.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', l);
                        var p = t.parse(s, u, i);
                        if (!p) return null;
                        i = i || p.type, r.push([a, p])
                    }
                    return new Me(i, o, r)
                }, Me.prototype.evaluate = function (e) {
                    var t = this.labels, o = this.outputs;
                    if (1 === t.length) return o[0].evaluate(e);
                    var r = this.input.evaluate(e);
                    if (r <= t[0]) return o[0].evaluate(e);
                    var i = t.length;
                    return r >= t[i - 1] ? o[i - 1].evaluate(e) : o[Re(t, r)].evaluate(e)
                }, Me.prototype.eachChild = function (e) {
                    e(this.input);
                    for (var t = 0, o = this.outputs; t < o.length; t += 1) {
                        e(o[t])
                    }
                }, Me.prototype.possibleOutputs = function () {
                    var e;
                    return (e = []).concat.apply(e, this.outputs.map(function (e) {
                        return e.possibleOutputs()
                    }))
                }, Me.prototype.serialize = function () {
                    for (var e = ["step", this.input.serialize()], t = 0; t < this.labels.length; t++) t > 0 && e.push(this.labels[t]), e.push(this.outputs[t].serialize());
                    return e
                };
                var Ee = Ie;

                function Ie(e, t, o, r) {
                    this.cx = 3 * e, this.bx = 3 * (o - e) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * t, this.by = 3 * (r - t) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = e, this.p1y = r, this.p2x = o, this.p2y = r
                }

                function Pe(e, t, o) {
                    return e * (1 - o) + t * o
                }

                Ie.prototype.sampleCurveX = function (e) {
                    return ((this.ax * e + this.bx) * e + this.cx) * e
                }, Ie.prototype.sampleCurveY = function (e) {
                    return ((this.ay * e + this.by) * e + this.cy) * e
                }, Ie.prototype.sampleCurveDerivativeX = function (e) {
                    return (3 * this.ax * e + 2 * this.bx) * e + this.cx
                }, Ie.prototype.solveCurveX = function (e, t) {
                    var o, r, i, n, a;
                    for (void 0 === t && (t = 1e-6), i = e, a = 0; a < 8; a++) {
                        if (n = this.sampleCurveX(i) - e, Math.abs(n) < t) return i;
                        var s = this.sampleCurveDerivativeX(i);
                        if (Math.abs(s) < 1e-6) break;
                        i -= n / s
                    }
                    if ((i = e) < (o = 0)) return o;
                    if (i > (r = 1)) return r;
                    for (; o < r;) {
                        if (n = this.sampleCurveX(i), Math.abs(n - e) < t) return i;
                        e > n ? o = i : r = i, i = .5 * (r - o) + o
                    }
                    return i
                }, Ie.prototype.solve = function (e, t) {
                    return this.sampleCurveY(this.solveCurveX(e, t))
                };
                var qe = Object.freeze({
                        number: Pe, color: function (e, t, o) {
                            return new le(Pe(e.r, t.r, o), Pe(e.g, t.g, o), Pe(e.b, t.b, o), Pe(e.a, t.a, o))
                        }, array: function (e, t, o) {
                            return e.map(function (e, r) {
                                return Pe(e, t[r], o)
                            })
                        }
                    }), Le = .95047, Ne = 1, Fe = 1.08883, De = 4 / 29, Be = 6 / 29, Ue = 3 * Be * Be, Ge = Be * Be * Be,
                    Je = Math.PI / 180, We = 180 / Math.PI;

                function $e(e) {
                    return e > Ge ? Math.pow(e, 1 / 3) : e / Ue + De
                }

                function Ve(e) {
                    return e > Be ? e * e * e : Ue * (e - De)
                }

                function Ye(e) {
                    return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055)
                }

                function He(e) {
                    return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                }

                function Ke(e) {
                    var t = He(e.r), o = He(e.g), r = He(e.b),
                        i = $e((.4124564 * t + .3575761 * o + .1804375 * r) / Le),
                        n = $e((.2126729 * t + .7151522 * o + .072175 * r) / Ne);
                    return {
                        l: 116 * n - 16,
                        a: 500 * (i - n),
                        b: 200 * (n - $e((.0193339 * t + .119192 * o + .9503041 * r) / Fe)),
                        alpha: e.a
                    }
                }

                function Ze(e) {
                    var t = (e.l + 16) / 116, o = isNaN(e.a) ? t : t + e.a / 500, r = isNaN(e.b) ? t : t - e.b / 200;
                    return t = Ne * Ve(t), o = Le * Ve(o), r = Fe * Ve(r), new le(Ye(3.2404542 * o - 1.5371385 * t - .4985314 * r), Ye(-.969266 * o + 1.8760108 * t + .041556 * r), Ye(.0556434 * o - .2040259 * t + 1.0572252 * r), e.alpha)
                }

                function Xe(e, t, o) {
                    var r = t - e;
                    return e + o * (r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r)
                }

                var Qe = {
                    forward: Ke, reverse: Ze, interpolate: function (e, t, o) {
                        return {
                            l: Pe(e.l, t.l, o),
                            a: Pe(e.a, t.a, o),
                            b: Pe(e.b, t.b, o),
                            alpha: Pe(e.alpha, t.alpha, o)
                        }
                    }
                }, et = {
                    forward: function (e) {
                        var t = Ke(e), o = t.l, r = t.a, i = t.b, n = Math.atan2(i, r) * We;
                        return {h: n < 0 ? n + 360 : n, c: Math.sqrt(r * r + i * i), l: o, alpha: e.a}
                    }, reverse: function (e) {
                        var t = e.h * Je, o = e.c;
                        return Ze({l: e.l, a: Math.cos(t) * o, b: Math.sin(t) * o, alpha: e.alpha})
                    }, interpolate: function (e, t, o) {
                        return {
                            h: Xe(e.h, t.h, o),
                            c: Pe(e.c, t.c, o),
                            l: Pe(e.l, t.l, o),
                            alpha: Pe(e.alpha, t.alpha, o)
                        }
                    }
                }, tt = Object.freeze({lab: Qe, hcl: et}), ot = function (e, t, o, r, i) {
                    this.type = e, this.operator = t, this.interpolation = o, this.input = r, this.labels = [], this.outputs = [];
                    for (var n = 0, a = i; n < a.length; n += 1) {
                        var s = a[n], l = s[0], u = s[1];
                        this.labels.push(l), this.outputs.push(u)
                    }
                };

                function rt(e, t, o, r) {
                    var i = r - o, n = e - o;
                    return 0 === i ? 0 : 1 === t ? n / i : (Math.pow(t, n) - 1) / (Math.pow(t, i) - 1)
                }

                ot.interpolationFactor = function (e, t, o, r) {
                    var i = 0;
                    if ("exponential" === e.name) i = rt(t, e.base, o, r); else if ("linear" === e.name) i = rt(t, 1, o, r); else if ("cubic-bezier" === e.name) {
                        var n = e.controlPoints;
                        i = new Ee(n[0], n[1], n[2], n[3]).solve(rt(t, 1, o, r))
                    }
                    return i
                }, ot.parse = function (e, t) {
                    var o = e[0], r = e[1], i = e[2], n = e.slice(3);
                    if (!Array.isArray(r) || 0 === r.length) return t.error("Expected an interpolation type expression.", 1);
                    if ("linear" === r[0]) r = {name: "linear"}; else if ("exponential" === r[0]) {
                        var a = r[1];
                        if ("number" != typeof a) return t.error("Exponential interpolation requires a numeric base.", 1, 1);
                        r = {name: "exponential", base: a}
                    } else {
                        if ("cubic-bezier" !== r[0]) return t.error("Unknown interpolation type " + String(r[0]), 1, 0);
                        var s = r.slice(1);
                        if (4 !== s.length || s.some(function (e) {
                                return "number" != typeof e || e < 0 || e > 1
                            })) return t.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
                        r = {name: "cubic-bezier", controlPoints: s}
                    }
                    if (e.length - 1 < 4) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
                    if ((e.length - 1) % 2 != 0) return t.error("Expected an even number of arguments.");
                    if (!(i = t.parse(i, 2, H))) return null;
                    var l = [], u = null;
                    "interpolate-hcl" === o || "interpolate-lab" === o ? u = X : t.expectedType && "value" !== t.expectedType.kind && (u = t.expectedType);
                    for (var p = 0; p < n.length; p += 2) {
                        var c = n[p], d = n[p + 1], h = p + 3, f = p + 4;
                        if ("number" != typeof c) return t.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', h);
                        if (l.length && l[l.length - 1][0] >= c) return t.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', h);
                        var y = t.parse(d, f, u);
                        if (!y) return null;
                        u = u || y.type, l.push([c, y])
                    }
                    return "number" === u.kind || "color" === u.kind || "array" === u.kind && "number" === u.itemType.kind && "number" == typeof u.N ? new ot(u, o, r, i, l) : t.error("Type " + ie(u) + " is not interpolatable.")
                }, ot.prototype.evaluate = function (e) {
                    var t = this.labels, o = this.outputs;
                    if (1 === t.length) return o[0].evaluate(e);
                    var r = this.input.evaluate(e);
                    if (r <= t[0]) return o[0].evaluate(e);
                    var i = t.length;
                    if (r >= t[i - 1]) return o[i - 1].evaluate(e);
                    var n = Re(t, r), a = t[n], s = t[n + 1], l = ot.interpolationFactor(this.interpolation, r, a, s),
                        u = o[n].evaluate(e), p = o[n + 1].evaluate(e);
                    return "interpolate" === this.operator ? qe[this.type.kind.toLowerCase()](u, p, l) : "interpolate-hcl" === this.operator ? et.reverse(et.interpolate(et.forward(u), et.forward(p), l)) : Qe.reverse(Qe.interpolate(Qe.forward(u), Qe.forward(p), l))
                }, ot.prototype.eachChild = function (e) {
                    e(this.input);
                    for (var t = 0, o = this.outputs; t < o.length; t += 1) {
                        e(o[t])
                    }
                }, ot.prototype.possibleOutputs = function () {
                    var e;
                    return (e = []).concat.apply(e, this.outputs.map(function (e) {
                        return e.possibleOutputs()
                    }))
                }, ot.prototype.serialize = function () {
                    var e;
                    e = "linear" === this.interpolation.name ? ["linear"] : "exponential" === this.interpolation.name ? 1 === this.interpolation.base ? ["linear"] : ["exponential", this.interpolation.base] : ["cubic-bezier"].concat(this.interpolation.controlPoints);
                    for (var t = [this.operator, e, this.input.serialize()], o = 0; o < this.labels.length; o++) t.push(this.labels[o], this.outputs[o].serialize());
                    return t
                };
                var it = function (e, t) {
                    this.type = e, this.args = t
                };
                it.parse = function (e, t) {
                    if (e.length < 2) return t.error("Expectected at least one argument.");
                    var o = null, r = t.expectedType;
                    r && "value" !== r.kind && (o = r);
                    for (var i = [], n = 0, a = e.slice(1); n < a.length; n += 1) {
                        var s = a[n], l = t.parse(s, 1 + i.length, o, void 0, {typeAnnotation: "omit"});
                        if (!l) return null;
                        o = o || l.type, i.push(l)
                    }
                    var u = r && i.some(function (e) {
                        return ae(r, e.type)
                    });
                    return new it(u ? ee : o, i)
                }, it.prototype.evaluate = function (e) {
                    for (var t = null, o = 0, r = this.args; o < r.length; o += 1) {
                        if (null !== (t = r[o].evaluate(e))) break
                    }
                    return t
                }, it.prototype.eachChild = function (e) {
                    this.args.forEach(e)
                }, it.prototype.possibleOutputs = function () {
                    var e;
                    return (e = []).concat.apply(e, this.args.map(function (e) {
                        return e.possibleOutputs()
                    }))
                }, it.prototype.serialize = function () {
                    var e = ["coalesce"];
                    return this.eachChild(function (t) {
                        e.push(t.serialize())
                    }), e
                };
                var nt = function (e, t) {
                    this.type = t.type, this.bindings = [].concat(e), this.result = t
                };
                nt.prototype.evaluate = function (e) {
                    return this.result.evaluate(e)
                }, nt.prototype.eachChild = function (e) {
                    for (var t = 0, o = this.bindings; t < o.length; t += 1) {
                        e(o[t][1])
                    }
                    e(this.result)
                }, nt.parse = function (e, t) {
                    if (e.length < 4) return t.error("Expected at least 3 arguments, but found " + (e.length - 1) + " instead.");
                    for (var o = [], r = 1; r < e.length - 1; r += 2) {
                        var i = e[r];
                        if ("string" != typeof i) return t.error("Expected string, but found " + typeof i + " instead.", r);
                        if (/[^a-zA-Z0-9_]/.test(i)) return t.error("Variable names must contain only alphanumeric characters or '_'.", r);
                        var n = t.parse(e[r + 1], r + 1);
                        if (!n) return null;
                        o.push([i, n])
                    }
                    var a = t.parse(e[e.length - 1], e.length - 1, t.expectedType, o);
                    return a ? new nt(o, a) : null
                }, nt.prototype.possibleOutputs = function () {
                    return this.result.possibleOutputs()
                }, nt.prototype.serialize = function () {
                    for (var e = ["let"], t = 0, o = this.bindings; t < o.length; t += 1) {
                        var r = o[t], i = r[0], n = r[1];
                        e.push(i, n.serialize())
                    }
                    return e.push(this.result.serialize()), e
                };
                var at = function (e, t, o) {
                    this.type = e, this.index = t, this.input = o
                };
                at.parse = function (e, t) {
                    if (3 !== e.length) return t.error("Expected 2 arguments, but found " + (e.length - 1) + " instead.");
                    var o = t.parse(e[1], 1, H), r = t.parse(e[2], 2, re(t.expectedType || ee));
                    if (!o || !r) return null;
                    var i = r.type;
                    return new at(i.itemType, o, r)
                }, at.prototype.evaluate = function (e) {
                    var t = this.index.evaluate(e), o = this.input.evaluate(e);
                    if (t < 0) throw new me("Array index out of bounds: " + t + " < 0.");
                    if (t >= o.length) throw new me("Array index out of bounds: " + t + " > " + (o.length - 1) + ".");
                    if (t !== Math.floor(t)) throw new me("Array index must be an integer, but found " + t + " instead.");
                    return o[t]
                }, at.prototype.eachChild = function (e) {
                    e(this.index), e(this.input)
                }, at.prototype.possibleOutputs = function () {
                    return [void 0]
                }, at.prototype.serialize = function () {
                    return ["at", this.index.serialize(), this.input.serialize()]
                };
                var st = function (e, t, o, r, i, n) {
                    this.inputType = e, this.type = t, this.input = o, this.cases = r, this.outputs = i, this.otherwise = n
                };
                st.parse = function (e, t) {
                    if (e.length < 5) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
                    if (e.length % 2 != 1) return t.error("Expected an even number of arguments.");
                    var o, r;
                    t.expectedType && "value" !== t.expectedType.kind && (r = t.expectedType);
                    for (var i = {}, n = [], a = 2; a < e.length - 1; a += 2) {
                        var s = e[a], l = e[a + 1];
                        Array.isArray(s) || (s = [s]);
                        var u = t.concat(a);
                        if (0 === s.length) return u.error("Expected at least one branch label.");
                        for (var p = 0, c = s; p < c.length; p += 1) {
                            var d = c[p];
                            if ("number" != typeof d && "string" != typeof d) return u.error("Branch labels must be numbers or strings.");
                            if ("number" == typeof d && Math.abs(d) > Number.MAX_SAFE_INTEGER) return u.error("Branch labels must be integers no larger than " + Number.MAX_SAFE_INTEGER + ".");
                            if ("number" == typeof d && Math.floor(d) !== d) return u.error("Numeric branch labels must be integer values.");
                            if (o) {
                                if (u.checkSubtype(o, he(d))) return null
                            } else o = he(d);
                            if (void 0 !== i[String(d)]) return u.error("Branch labels must be unique.");
                            i[String(d)] = n.length
                        }
                        var h = t.parse(l, a, r);
                        if (!h) return null;
                        r = r || h.type, n.push(h)
                    }
                    var f = t.parse(e[1], 1, ee);
                    if (!f) return null;
                    var y = t.parse(e[e.length - 1], e.length - 1, r);
                    return y ? "value" !== f.type.kind && t.concat(1).checkSubtype(o, f.type) ? null : new st(o, r, f, i, n, y) : null
                }, st.prototype.evaluate = function (e) {
                    var t = this.input.evaluate(e);
                    return (he(t) === this.inputType && this.outputs[this.cases[t]] || this.otherwise).evaluate(e)
                }, st.prototype.eachChild = function (e) {
                    e(this.input), this.outputs.forEach(e), e(this.otherwise)
                }, st.prototype.possibleOutputs = function () {
                    var e;
                    return (e = []).concat.apply(e, this.outputs.map(function (e) {
                        return e.possibleOutputs()
                    })).concat(this.otherwise.possibleOutputs())
                }, st.prototype.serialize = function () {
                    for (var e = this, t = ["match", this.input.serialize()], o = [], r = {}, i = 0, n = Object.keys(this.cases).sort(); i < n.length; i += 1) {
                        var a = n[i];
                        void 0 === (c = r[this.cases[a]]) ? (r[this.cases[a]] = o.length, o.push([this.cases[a], [a]])) : o[c][1].push(a)
                    }
                    for (var s = function (t) {
                        return "number" === e.inputType.kind ? Number(t) : t
                    }, l = 0, u = o; l < u.length; l += 1) {
                        var p = u[l], c = p[0], d = p[1];
                        1 === d.length ? t.push(s(d[0])) : t.push(d.map(s)), t.push(this.outputs[outputIndex$1].serialize())
                    }
                    return t.push(this.otherwise.serialize()), t
                };
                var lt = function (e, t, o) {
                    this.type = e, this.branches = t, this.otherwise = o
                };

                function ut(e, t) {
                    return "==" === e || "!=" === e ? "boolean" === t.kind || "string" === t.kind || "number" === t.kind || "null" === t.kind || "value" === t.kind : "string" === t.kind || "number" === t.kind || "value" === t.kind
                }

                function pt(e, t, o, r) {
                    return 0 === r.compare(t, o)
                }

                function ct(e, t, o) {
                    var r = "==" !== e && "!=" !== e;
                    return function () {
                        function i(e, t, o) {
                            this.type = Z, this.lhs = e, this.rhs = t, this.collator = o, this.hasUntypedArgument = "value" === e.type.kind || "value" === t.type.kind
                        }

                        return i.parse = function (e, t) {
                            if (3 !== e.length && 4 !== e.length) return t.error("Expected two or three arguments.");
                            var o = e[0], n = t.parse(e[1], 1, ee);
                            if (!n) return null;
                            if (!ut(o, n.type)) return t.concat(1).error('"' + o + "\" comparisons are not supported for type '" + ie(n.type) + "'.");
                            var a = t.parse(e[2], 2, ee);
                            if (!a) return null;
                            if (!ut(o, a.type)) return t.concat(2).error('"' + o + "\" comparisons are not supported for type '" + ie(a.type) + "'.");
                            if (n.type.kind !== a.type.kind && "value" !== n.type.kind && "value" !== a.type.kind) return t.error("Cannot compare types '" + ie(n.type) + "' and '" + ie(a.type) + "'.");
                            r && ("value" === n.type.kind && "value" !== a.type.kind ? n = new ve(a.type, [n]) : "value" !== n.type.kind && "value" === a.type.kind && (a = new ve(n.type, [a])));
                            var s = null;
                            if (4 === e.length) {
                                if ("string" !== n.type.kind && "string" !== a.type.kind && "value" !== n.type.kind && "value" !== a.type.kind) return t.error("Cannot use collator to compare non-string types.");
                                if (!(s = t.parse(e[3], 3, te))) return null
                            }
                            return new i(n, a, s)
                        }, i.prototype.evaluate = function (i) {
                            var n = this.lhs.evaluate(i), a = this.rhs.evaluate(i);
                            if (r && this.hasUntypedArgument) {
                                var s = he(n), l = he(a);
                                if (s.kind !== l.kind || "string" !== s.kind && "number" !== s.kind) throw new me('Expected arguments for "' + e + '" to be (string, string) or (number, number), but found (' + s.kind + ", " + l.kind + ") instead.")
                            }
                            if (this.collator && !r && this.hasUntypedArgument) {
                                var u = he(n), p = he(a);
                                if ("string" !== u.kind || "string" !== p.kind) return t(i, n, a)
                            }
                            return this.collator ? o(i, n, a, this.collator.evaluate(i)) : t(i, n, a)
                        }, i.prototype.eachChild = function (e) {
                            e(this.lhs), e(this.rhs), this.collator && e(this.collator)
                        }, i.prototype.possibleOutputs = function () {
                            return [!0, !1]
                        }, i.prototype.serialize = function () {
                            var t = [e];
                            return this.eachChild(function (e) {
                                t.push(e.serialize())
                            }), t
                        }, i
                    }()
                }

                lt.parse = function (e, t) {
                    if (e.length < 4) return t.error("Expected at least 3 arguments, but found only " + (e.length - 1) + ".");
                    if (e.length % 2 != 0) return t.error("Expected an odd number of arguments.");
                    var o;
                    t.expectedType && "value" !== t.expectedType.kind && (o = t.expectedType);
                    for (var r = [], i = 1; i < e.length - 1; i += 2) {
                        var n = t.parse(e[i], i, Z);
                        if (!n) return null;
                        var a = t.parse(e[i + 1], i + 1, o);
                        if (!a) return null;
                        r.push([n, a]), o = o || a.type
                    }
                    var s = t.parse(e[e.length - 1], e.length - 1, o);
                    return s ? new lt(o, r, s) : null
                }, lt.prototype.evaluate = function (e) {
                    for (var t = 0, o = this.branches; t < o.length; t += 1) {
                        var r = o[t], i = r[0], n = r[1];
                        if (i.evaluate(e)) return n.evaluate(e)
                    }
                    return this.otherwise.evaluate(e)
                }, lt.prototype.eachChild = function (e) {
                    for (var t = 0, o = this.branches; t < o.length; t += 1) {
                        var r = o[t], i = r[0], n = r[1];
                        e(i), e(n)
                    }
                    e(this.otherwise)
                }, lt.prototype.possibleOutputs = function () {
                    var e;
                    return (e = []).concat.apply(e, this.branches.map(function (e) {
                        e[0];
                        return e[1].possibleOutputs()
                    })).concat(this.otherwise.possibleOutputs())
                }, lt.prototype.serialize = function () {
                    var e = ["case"];
                    return this.eachChild(function (t) {
                        e.push(t.serialize())
                    }), e
                };
                var dt = ct("==", function (e, t, o) {
                    return t === o
                }, pt), ht = ct("!=", function (e, t, o) {
                    return t !== o
                }, function (e, t, o, r) {
                    return !pt(0, t, o, r)
                }), ft = ct("<", function (e, t, o) {
                    return t < o
                }, function (e, t, o, r) {
                    return r.compare(t, o) < 0
                }), yt = ct(">", function (e, t, o) {
                    return t > o
                }, function (e, t, o, r) {
                    return r.compare(t, o) > 0
                }), mt = ct("<=", function (e, t, o) {
                    return t <= o
                }, function (e, t, o, r) {
                    return r.compare(t, o) <= 0
                }), gt = ct(">=", function (e, t, o) {
                    return t >= o
                }, function (e, t, o, r) {
                    return r.compare(t, o) >= 0
                }), vt = function (e, t, o, r, i) {
                    this.type = K, this.number = e, this.locale = t, this.currency = o, this.minFractionDigits = r, this.maxFractionDigits = i
                };
                vt.parse = function (e, t) {
                    if (3 !== e.length) return t.error("Expected two arguments.");
                    var o = t.parse(e[1], 1, H);
                    if (!o) return null;
                    var r = e[2];
                    if ("object" != typeof r || Array.isArray(r)) return t.error("NumberFormat options argument must be an object.");
                    var i = null;
                    if (r.locale && !(i = t.parse(r.locale, 1, K))) return null;
                    var n = null;
                    if (r.currency && !(n = t.parse(r.currency, 1, K))) return null;
                    var a = null;
                    if (r["min-fraction-digits"] && !(a = t.parse(r["min-fraction-digits"], 1, H))) return null;
                    var s = null;
                    return r["max-fraction-digits"] && !(s = t.parse(r["max-fraction-digits"], 1, H)) ? null : new vt(o, i, n, a, s)
                }, vt.prototype.evaluate = function (e) {
                    return new Intl.NumberFormat(this.locale ? this.locale.evaluate(e) : [], {
                        style: this.currency ? "currency" : "decimal",
                        currency: this.currency ? this.currency.evaluate(e) : void 0,
                        minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(e) : void 0,
                        maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(e) : void 0
                    }).format(this.number.evaluate(e))
                }, vt.prototype.eachChild = function (e) {
                    e(this.number), this.locale && e(this.locale), this.currency && e(this.currency), this.minFractionDigits && e(this.minFractionDigits), this.maxFractionDigits && e(this.maxFractionDigits)
                }, vt.prototype.possibleOutputs = function () {
                    return [void 0]
                }, vt.prototype.serialize = function () {
                    var e = {};
                    return this.locale && (e.locale = this.locale.serialize()), this.currency && (e.currency = this.currency.serialize()), this.minFractionDigits && (e["min-fraction-digits"] = this.minFractionDigits.serialize()), this.maxFractionDigits && (e["max-fraction-digits"] = this.maxFractionDigits.serialize()), ["number-format", this.number.serialize(), e]
                };
                var bt = function (e) {
                    this.type = H, this.input = e
                };
                bt.parse = function (e, t) {
                    if (2 !== e.length) return t.error("Expected 1 argument, but found " + (e.length - 1) + " instead.");
                    var o = t.parse(e[1], 1);
                    return o ? "array" !== o.type.kind && "string" !== o.type.kind && "value" !== o.type.kind ? t.error("Expected argument of type string or array, but found " + ie(o.type) + " instead.") : new bt(o) : null
                }, bt.prototype.evaluate = function (e) {
                    var t = this.input.evaluate(e);
                    if ("string" == typeof t) return t.length;
                    if (Array.isArray(t)) return t.length;
                    throw new me("Expected value to be of type string or array, but found " + ie(he(t)) + " instead.")
                }, bt.prototype.eachChild = function (e) {
                    e(this.input)
                }, bt.prototype.possibleOutputs = function () {
                    return [void 0]
                }, bt.prototype.serialize = function () {
                    var e = ["length"];
                    return this.eachChild(function (t) {
                        e.push(t.serialize())
                    }), e
                };
                var xt = {
                    "==": dt,
                    "!=": ht,
                    ">": yt,
                    "<": ft,
                    ">=": gt,
                    "<=": mt,
                    array: ve,
                    at: at,
                    boolean: ve,
                    case: lt,
                    coalesce: it,
                    collator: Te,
                    format: be,
                    interpolate: ot,
                    "interpolate-hcl": ot,
                    "interpolate-lab": ot,
                    length: bt,
                    let: nt,
                    literal: ye,
                    match: st,
                    number: ve,
                    "number-format": vt,
                    object: ve,
                    step: Me,
                    string: ve,
                    "to-boolean": we,
                    "to-color": we,
                    "to-number": we,
                    "to-string": we,
                    var: Oe
                };

                function wt(e, t) {
                    var o = t[0], r = t[1], i = t[2], n = t[3];
                    o = o.evaluate(e), r = r.evaluate(e), i = i.evaluate(e);
                    var a = n ? n.evaluate(e) : 1, s = de(o, r, i, a);
                    if (s) throw new me(s);
                    return new le(o / 255 * a, r / 255 * a, i / 255 * a, a)
                }

                function kt(e, t) {
                    return e in t
                }

                function jt(e, t) {
                    var o = t[e];
                    return void 0 === o ? null : o
                }

                function St(e) {
                    return {type: e}
                }

                function Tt(e) {
                    return {result: "success", value: e}
                }

                function zt(e) {
                    return {result: "error", value: e}
                }

                function _t(e) {
                    return "data-driven" === e["property-type"] || "cross-faded-data-driven" === e["property-type"]
                }

                function At(e) {
                    return !!e.expression && e.expression.parameters.indexOf("zoom") > -1
                }

                function Ot(e) {
                    return !!e.expression && e.expression.interpolated
                }

                function Ct(e) {
                    return e instanceof Number ? "number" : e instanceof String ? "string" : e instanceof Boolean ? "boolean" : Array.isArray(e) ? "array" : null === e ? "null" : typeof e
                }

                function Rt(e) {
                    return "object" == typeof e && null !== e && !Array.isArray(e)
                }

                function Mt(e) {
                    return e
                }

                function Et(e, t) {
                    var o, r, i, n = "color" === t.type, a = e.stops && "object" == typeof e.stops[0][0],
                        s = a || void 0 !== e.property, l = a || !s, u = e.type || (Ot(t) ? "exponential" : "interval");
                    if (n && ((e = W({}, e)).stops && (e.stops = e.stops.map(function (e) {
                            return [e[0], le.parse(e[1])]
                        })), e.default ? e.default = le.parse(e.default) : e.default = le.parse(t.default)), e.colorSpace && "rgb" !== e.colorSpace && !tt[e.colorSpace]) throw new Error("Unknown color space: " + e.colorSpace);
                    if ("exponential" === u) o = Lt; else if ("interval" === u) o = qt; else if ("categorical" === u) {
                        o = Pt, r = Object.create(null);
                        for (var p = 0, c = e.stops; p < c.length; p += 1) {
                            var d = c[p];
                            r[d[0]] = d[1]
                        }
                        i = typeof e.stops[0][0]
                    } else {
                        if ("identity" !== u) throw new Error('Unknown function type "' + u + '"');
                        o = Nt
                    }
                    if (a) {
                        for (var h = {}, f = [], y = 0; y < e.stops.length; y++) {
                            var m = e.stops[y], g = m[0].zoom;
                            void 0 === h[g] && (h[g] = {
                                zoom: g,
                                type: e.type,
                                property: e.property,
                                default: e.default,
                                stops: []
                            }, f.push(g)), h[g].stops.push([m[0].value, m[1]])
                        }
                        for (var v = [], b = 0, x = f; b < x.length; b += 1) {
                            var w = x[b];
                            v.push([h[w].zoom, Et(h[w], t)])
                        }
                        var k = {name: "linear"};
                        return {
                            kind: "composite",
                            interpolationType: k,
                            interpolationFactor: ot.interpolationFactor.bind(void 0, k),
                            zoomStops: v.map(function (e) {
                                return e[0]
                            }),
                            evaluate: function (o, r) {
                                var i = o.zoom;
                                return Lt({stops: v, base: e.base}, t, i).evaluate(i, r)
                            }
                        }
                    }
                    if (l) {
                        var j = "exponential" === u ? {
                            name: "exponential",
                            base: void 0 !== e.base ? e.base : 1
                        } : null;
                        return {
                            kind: "camera",
                            interpolationType: j,
                            interpolationFactor: ot.interpolationFactor.bind(void 0, j),
                            zoomStops: e.stops.map(function (e) {
                                return e[0]
                            }),
                            evaluate: function (n) {
                                var a = n.zoom;
                                return o(e, t, a, r, i)
                            }
                        }
                    }
                    return {
                        kind: "source", evaluate: function (n, a) {
                            var s = a && a.properties ? a.properties[e.property] : void 0;
                            return void 0 === s ? It(e.default, t.default) : o(e, t, s, r, i)
                        }
                    }
                }

                function It(e, t, o) {
                    return void 0 !== e ? e : void 0 !== t ? t : void 0 !== o ? o : void 0
                }

                function Pt(e, t, o, r, i) {
                    return It(typeof o === i ? r[o] : void 0, e.default, t.default)
                }

                function qt(e, t, o) {
                    if ("number" !== Ct(o)) return It(e.default, t.default);
                    var r = e.stops.length;
                    if (1 === r) return e.stops[0][1];
                    if (o <= e.stops[0][0]) return e.stops[0][1];
                    if (o >= e.stops[r - 1][0]) return e.stops[r - 1][1];
                    var i = Re(e.stops.map(function (e) {
                        return e[0]
                    }), o);
                    return e.stops[i][1]
                }

                function Lt(e, t, o) {
                    var r = void 0 !== e.base ? e.base : 1;
                    if ("number" !== Ct(o)) return It(e.default, t.default);
                    var i = e.stops.length;
                    if (1 === i) return e.stops[0][1];
                    if (o <= e.stops[0][0]) return e.stops[0][1];
                    if (o >= e.stops[i - 1][0]) return e.stops[i - 1][1];
                    var n = Re(e.stops.map(function (e) {
                            return e[0]
                        }), o), a = function (e, t, o, r) {
                            var i = r - o, n = e - o;
                            return 0 === i ? 0 : 1 === t ? n / i : (Math.pow(t, n) - 1) / (Math.pow(t, i) - 1)
                        }(o, r, e.stops[n][0], e.stops[n + 1][0]), s = e.stops[n][1], l = e.stops[n + 1][1],
                        u = qe[t.type] || Mt;
                    if (e.colorSpace && "rgb" !== e.colorSpace) {
                        var p = tt[e.colorSpace];
                        u = function (e, t) {
                            return p.reverse(p.interpolate(p.forward(e), p.forward(t), a))
                        }
                    }
                    return "function" == typeof s.evaluate ? {
                        evaluate: function () {
                            for (var e = arguments, t = [], o = arguments.length; o--;) t[o] = e[o];
                            var r = s.evaluate.apply(void 0, t), i = l.evaluate.apply(void 0, t);
                            if (void 0 !== r && void 0 !== i) return u(r, i, a)
                        }
                    } : u(s, l, a)
                }

                function Nt(e, t, o) {
                    return "color" === t.type ? o = le.parse(o) : "formatted" === t.type ? o = ce.fromString(o.toString()) : Ct(o) === t.type || "enum" === t.type && t.values[o] || (o = void 0), It(o, e.default, t.default)
                }

                Se.register(xt, {
                    error: [{kind: "error"}, [K], function (e, t) {
                        var o = t[0];
                        throw new me(o.evaluate(e))
                    }],
                    typeof: [K, [ee], function (e, t) {
                        return ie(he(t[0].evaluate(e)))
                    }],
                    "to-rgba": [re(H, 4), [X], function (e, t) {
                        return t[0].evaluate(e).toArray()
                    }],
                    rgb: [X, [H, H, H], wt],
                    rgba: [X, [H, H, H, H], wt],
                    has: {
                        type: Z, overloads: [[[K], function (e, t) {
                            return kt(t[0].evaluate(e), e.properties())
                        }], [[K, Q], function (e, t) {
                            var o = t[0], r = t[1];
                            return kt(o.evaluate(e), r.evaluate(e))
                        }]]
                    },
                    get: {
                        type: ee, overloads: [[[K], function (e, t) {
                            return jt(t[0].evaluate(e), e.properties())
                        }], [[K, Q], function (e, t) {
                            var o = t[0], r = t[1];
                            return jt(o.evaluate(e), r.evaluate(e))
                        }]]
                    },
                    "feature-state": [ee, [K], function (e, t) {
                        return jt(t[0].evaluate(e), e.featureState || {})
                    }],
                    properties: [Q, [], function (e) {
                        return e.properties()
                    }],
                    "geometry-type": [K, [], function (e) {
                        return e.geometryType()
                    }],
                    id: [ee, [], function (e) {
                        return e.id()
                    }],
                    zoom: [H, [], function (e) {
                        return e.globals.zoom
                    }],
                    "heatmap-density": [H, [], function (e) {
                        return e.globals.heatmapDensity || 0
                    }],
                    "line-progress": [H, [], function (e) {
                        return e.globals.lineProgress || 0
                    }],
                    accumulated: [ee, [], function (e) {
                        return void 0 === e.globals.accumulated ? null : e.globals.accumulated
                    }],
                    "+": [H, St(H), function (e, t) {
                        for (var o = 0, r = 0, i = t; r < i.length; r += 1) {
                            o += i[r].evaluate(e)
                        }
                        return o
                    }],
                    "*": [H, St(H), function (e, t) {
                        for (var o = 1, r = 0, i = t; r < i.length; r += 1) {
                            o *= i[r].evaluate(e)
                        }
                        return o
                    }],
                    "-": {
                        type: H, overloads: [[[H, H], function (e, t) {
                            var o = t[0], r = t[1];
                            return o.evaluate(e) - r.evaluate(e)
                        }], [[H], function (e, t) {
                            return -t[0].evaluate(e)
                        }]]
                    },
                    "/": [H, [H, H], function (e, t) {
                        var o = t[0], r = t[1];
                        return o.evaluate(e) / r.evaluate(e)
                    }],
                    "%": [H, [H, H], function (e, t) {
                        var o = t[0], r = t[1];
                        return o.evaluate(e) % r.evaluate(e)
                    }],
                    ln2: [H, [], function () {
                        return Math.LN2
                    }],
                    pi: [H, [], function () {
                        return Math.PI
                    }],
                    e: [H, [], function () {
                        return Math.E
                    }],
                    "^": [H, [H, H], function (e, t) {
                        var o = t[0], r = t[1];
                        return Math.pow(o.evaluate(e), r.evaluate(e))
                    }],
                    sqrt: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.sqrt(o.evaluate(e))
                    }],
                    log10: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.log(o.evaluate(e)) / Math.LN10
                    }],
                    ln: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.log(o.evaluate(e))
                    }],
                    log2: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.log(o.evaluate(e)) / Math.LN2
                    }],
                    sin: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.sin(o.evaluate(e))
                    }],
                    cos: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.cos(o.evaluate(e))
                    }],
                    tan: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.tan(o.evaluate(e))
                    }],
                    asin: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.asin(o.evaluate(e))
                    }],
                    acos: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.acos(o.evaluate(e))
                    }],
                    atan: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.atan(o.evaluate(e))
                    }],
                    min: [H, St(H), function (e, t) {
                        return Math.min.apply(Math, t.map(function (t) {
                            return t.evaluate(e)
                        }))
                    }],
                    max: [H, St(H), function (e, t) {
                        return Math.max.apply(Math, t.map(function (t) {
                            return t.evaluate(e)
                        }))
                    }],
                    abs: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.abs(o.evaluate(e))
                    }],
                    round: [H, [H], function (e, t) {
                        var o = t[0].evaluate(e);
                        return o < 0 ? -Math.round(-o) : Math.round(o)
                    }],
                    floor: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.floor(o.evaluate(e))
                    }],
                    ceil: [H, [H], function (e, t) {
                        var o = t[0];
                        return Math.ceil(o.evaluate(e))
                    }],
                    "filter-==": [Z, [K, ee], function (e, t) {
                        var o = t[0], r = t[1];
                        return e.properties()[o.value] === r.value
                    }],
                    "filter-id-==": [Z, [ee], function (e, t) {
                        var o = t[0];
                        return e.id() === o.value
                    }],
                    "filter-type-==": [Z, [K], function (e, t) {
                        var o = t[0];
                        return e.geometryType() === o.value
                    }],
                    "filter-<": [Z, [K, ee], function (e, t) {
                        var o = t[0], r = t[1], i = e.properties()[o.value], n = r.value;
                        return typeof i == typeof n && i < n
                    }],
                    "filter-id-<": [Z, [ee], function (e, t) {
                        var o = t[0], r = e.id(), i = o.value;
                        return typeof r == typeof i && r < i
                    }],
                    "filter->": [Z, [K, ee], function (e, t) {
                        var o = t[0], r = t[1], i = e.properties()[o.value], n = r.value;
                        return typeof i == typeof n && i > n
                    }],
                    "filter-id->": [Z, [ee], function (e, t) {
                        var o = t[0], r = e.id(), i = o.value;
                        return typeof r == typeof i && r > i
                    }],
                    "filter-<=": [Z, [K, ee], function (e, t) {
                        var o = t[0], r = t[1], i = e.properties()[o.value], n = r.value;
                        return typeof i == typeof n && i <= n
                    }],
                    "filter-id-<=": [Z, [ee], function (e, t) {
                        var o = t[0], r = e.id(), i = o.value;
                        return typeof r == typeof i && r <= i
                    }],
                    "filter->=": [Z, [K, ee], function (e, t) {
                        var o = t[0], r = t[1], i = e.properties()[o.value], n = r.value;
                        return typeof i == typeof n && i >= n
                    }],
                    "filter-id->=": [Z, [ee], function (e, t) {
                        var o = t[0], r = e.id(), i = o.value;
                        return typeof r == typeof i && r >= i
                    }],
                    "filter-has": [Z, [ee], function (e, t) {
                        return t[0].value in e.properties()
                    }],
                    "filter-has-id": [Z, [], function (e) {
                        return null !== e.id()
                    }],
                    "filter-type-in": [Z, [re(K)], function (e, t) {
                        return t[0].value.indexOf(e.geometryType()) >= 0
                    }],
                    "filter-id-in": [Z, [re(ee)], function (e, t) {
                        return t[0].value.indexOf(e.id()) >= 0
                    }],
                    "filter-in-small": [Z, [K, re(ee)], function (e, t) {
                        var o = t[0];
                        return t[1].value.indexOf(e.properties()[o.value]) >= 0
                    }],
                    "filter-in-large": [Z, [K, re(ee)], function (e, t) {
                        var o = t[0], r = t[1];
                        return function (e, t, o, r) {
                            for (; o <= r;) {
                                var i = o + r >> 1;
                                if (t[i] === e) return !0;
                                t[i] > e ? r = i - 1 : o = i + 1
                            }
                            return !1
                        }(e.properties()[o.value], r.value, 0, r.value.length - 1)
                    }],
                    all: {
                        type: Z, overloads: [[[Z, Z], function (e, t) {
                            var o = t[0], r = t[1];
                            return o.evaluate(e) && r.evaluate(e)
                        }], [St(Z), function (e, t) {
                            for (var o = 0, r = t; o < r.length; o += 1) {
                                if (!r[o].evaluate(e)) return !1
                            }
                            return !0
                        }]]
                    },
                    any: {
                        type: Z, overloads: [[[Z, Z], function (e, t) {
                            var o = t[0], r = t[1];
                            return o.evaluate(e) || r.evaluate(e)
                        }], [St(Z), function (e, t) {
                            for (var o = 0, r = t; o < r.length; o += 1) {
                                if (r[o].evaluate(e)) return !0
                            }
                            return !1
                        }]]
                    },
                    "!": [Z, [Z], function (e, t) {
                        return !t[0].evaluate(e)
                    }],
                    "is-supported-script": [Z, [K], function (e, t) {
                        var o = t[0], r = e.globals && e.globals.isSupportedScript;
                        return !r || r(o.evaluate(e))
                    }],
                    upcase: [K, [K], function (e, t) {
                        return t[0].evaluate(e).toUpperCase()
                    }],
                    downcase: [K, [K], function (e, t) {
                        return t[0].evaluate(e).toLowerCase()
                    }],
                    concat: [K, St(ee), function (e, t) {
                        return t.map(function (t) {
                            return fe(t.evaluate(e))
                        }).join("")
                    }],
                    "resolved-locale": [K, [te], function (e, t) {
                        return t[0].evaluate(e).resolvedLocale()
                    }]
                });
                var Ft = function (e, t) {
                    var o;
                    this.expression = e, this._warningHistory = {}, this._evaluator = new je, this._defaultValue = t ? "color" === (o = t).type && Rt(o.default) ? new le(0, 0, 0, 0) : "color" === o.type ? le.parse(o.default) || null : void 0 === o.default ? null : o.default : null, this._enumValues = t && "enum" === t.type ? t.values : null
                };

                function Dt(e) {
                    return Array.isArray(e) && e.length > 0 && "string" == typeof e[0] && e[0] in xt
                }

                function Bt(e, t) {
                    var o = new Ce(xt, [], t ? function (e) {
                            var t = {color: X, string: K, number: H, enum: K, boolean: Z, formatted: oe};
                            if ("array" === e.type) return re(t[e.value] || ee, e.length);
                            return t[e.type]
                        }(t) : void 0),
                        r = o.parse(e, void 0, void 0, void 0, t && "string" === t.type ? {typeAnnotation: "coerce"} : void 0);
                    return r ? Tt(new Ft(r, t)) : zt(o.errors)
                }

                Ft.prototype.evaluateWithoutErrorHandling = function (e, t, o) {
                    return this._evaluator.globals = e, this._evaluator.feature = t, this._evaluator.featureState = o, this.expression.evaluate(this._evaluator)
                }, Ft.prototype.evaluate = function (e, t, o) {
                    this._evaluator.globals = e, this._evaluator.feature = t || null, this._evaluator.featureState = o || null;
                    try {
                        var r = this.expression.evaluate(this._evaluator);
                        if (null == r) return this._defaultValue;
                        if (this._enumValues && !(r in this._enumValues)) throw new me("Expected value to be one of " + Object.keys(this._enumValues).map(function (e) {
                            return JSON.stringify(e)
                        }).join(", ") + ", but found " + JSON.stringify(r) + " instead.");
                        return r
                    } catch (e) {
                        return this._warningHistory[e.message] || (this._warningHistory[e.message] = !0, "undefined" != typeof console && console.warn(e.message)), this._defaultValue
                    }
                };
                var Ut = function (e, t) {
                    this.kind = e, this._styleExpression = t, this.isStateDependent = "constant" !== e && !_e(t.expression)
                };
                Ut.prototype.evaluateWithoutErrorHandling = function (e, t, o) {
                    return this._styleExpression.evaluateWithoutErrorHandling(e, t, o)
                }, Ut.prototype.evaluate = function (e, t, o) {
                    return this._styleExpression.evaluate(e, t, o)
                };
                var Gt = function (e, t, o) {
                    this.kind = e, this.zoomStops = o.labels, this._styleExpression = t, this.isStateDependent = "camera" !== e && !_e(t.expression), o instanceof ot && (this.interpolationType = o.interpolation)
                };

                function Jt(e, t) {
                    if ("error" === (e = Bt(e, t)).result) return e;
                    var o = e.value.expression, r = ze(o);
                    if (!r && !_t(t)) return zt([new $("", "data expressions not supported")]);
                    var i = Ae(o, ["zoom"]);
                    if (!i && !At(t)) return zt([new $("", "zoom expressions not supported")]);
                    var n = function e(t) {
                        var o = null;
                        if (t instanceof nt) o = e(t.result); else if (t instanceof it) for (var r = 0, i = t.args; r < i.length; r += 1) {
                            var n = i[r];
                            if (o = e(n)) break
                        } else (t instanceof Me || t instanceof ot) && t.input instanceof Se && "zoom" === t.input.name && (o = t);
                        if (o instanceof $) return o;
                        t.eachChild(function (t) {
                            var r = e(t);
                            r instanceof $ ? o = r : !o && r ? o = new $("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.') : o && r && o !== r && (o = new $("", 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))
                        });
                        return o
                    }(o);
                    return n || i ? n instanceof $ ? zt([n]) : n instanceof ot && !Ot(t) ? zt([new $("", '"interpolate" expressions cannot be used with this property')]) : Tt(n ? new Gt(r ? "camera" : "composite", e.value, n) : new Ut(r ? "constant" : "source", e.value)) : zt([new $("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])
                }

                Gt.prototype.evaluateWithoutErrorHandling = function (e, t, o) {
                    return this._styleExpression.evaluateWithoutErrorHandling(e, t, o)
                }, Gt.prototype.evaluate = function (e, t, o) {
                    return this._styleExpression.evaluate(e, t, o)
                }, Gt.prototype.interpolationFactor = function (e, t, o) {
                    return this.interpolationType ? ot.interpolationFactor(this.interpolationType, e, t, o) : 0
                };
                var Wt = function (e, t) {
                    this._parameters = e, this._specification = t, W(this, Et(this._parameters, this._specification))
                };

                function $t(e) {
                    return "object" == typeof e ? ["literal", e] : e
                }

                function Vt(e, t) {
                    var o = e.stops;
                    if (!o) return function (e, t) {
                        var o = ["get", e.property];
                        if (void 0 === e.default) return "string" === t.type ? ["string", o] : o;
                        if ("enum" === t.type) return ["match", o, Object.keys(t.values), o, e.default];
                        var r = ["color" === t.type ? "to-color" : t.type, o, $t(e.default)];
                        return "array" === t.type && r.splice(1, 0, t.value, t.length || null), r
                    }(e, t);
                    var r = o && "object" == typeof o[0][0], i = r || void 0 !== e.property, n = r || !i;
                    return o = o.map(function (e) {
                        return !i && t.tokens && "string" == typeof e[1] ? [e[0], eo(e[1])] : [e[0], $t(e[1])]
                    }), r ? function (e, t, o) {
                        for (var r = {}, i = {}, n = [], a = 0; a < o.length; a++) {
                            var s = o[a], l = s[0].zoom;
                            void 0 === r[l] && (r[l] = {
                                zoom: l,
                                type: e.type,
                                property: e.property,
                                default: e.default
                            }, i[l] = [], n.push(l)), i[l].push([s[0].value, s[1]])
                        }
                        if ("exponential" === Qt({}, t)) {
                            for (var u = [Yt(e), ["linear"], ["zoom"]], p = 0, c = n; p < c.length; p += 1) {
                                var d = c[p], h = Kt(r[d], t, i[d]);
                                Xt(u, d, h, !1)
                            }
                            return u
                        }
                        for (var f = ["step", ["zoom"]], y = 0, m = n; y < m.length; y += 1) {
                            var g = m[y], v = Kt(r[g], t, i[g]);
                            Xt(f, g, v, !0)
                        }
                        return Zt(f), f
                    }(e, t, o) : n ? function (e, t, o, r) {
                        void 0 === r && (r = ["zoom"]);
                        var i, n = Qt(e, t), a = !1;
                        if ("interval" === n) i = ["step", r], a = !0; else {
                            if ("exponential" !== n) throw new Error('Unknown zoom function type "' + n + '"');
                            var s = void 0 !== e.base ? e.base : 1;
                            i = [Yt(e), ["exponential", s], r]
                        }
                        for (var l = 0, u = o; l < u.length; l += 1) {
                            var p = u[l];
                            Xt(i, p[0], p[1], a)
                        }
                        return Zt(i), i
                    }(e, t, o) : Kt(e, t, o)
                }

                function Yt(e) {
                    switch (e.colorSpace) {
                        case"hcl":
                            return "interpolate-hcl";
                        case"lab":
                            return "interpolate-lab";
                        default:
                            return "interpolate"
                    }
                }

                function Ht(e, t) {
                    return void 0 !== e ? e : void 0 !== t ? t : void 0
                }

                function Kt(e, t, o) {
                    var r = Qt(e, t), i = ["get", e.property];
                    if ("categorical" === r && "boolean" == typeof o[0][0]) {
                        for (var n = ["case"], a = 0, s = o; a < s.length; a += 1) {
                            var l = s[a];
                            n.push(["==", i, l[0]], l[1])
                        }
                        return n.push($t(Ht(e.default, t.default))), n
                    }
                    if ("categorical" === r) {
                        for (var u = ["match", i], p = 0, c = o; p < c.length; p += 1) {
                            var d = c[p];
                            Xt(u, d[0], d[1], !1)
                        }
                        return u.push($t(Ht(e.default, t.default))), u
                    }
                    if ("interval" === r) {
                        for (var h = ["step", ["number", i]], f = 0, y = o; f < y.length; f += 1) {
                            var m = y[f];
                            Xt(h, m[0], m[1], !0)
                        }
                        return Zt(h), void 0 === e.default ? h : ["case", ["==", ["typeof", i], "number"], h, $t(e.default)]
                    }
                    if ("exponential" === r) {
                        for (var g = void 0 !== e.base ? e.base : 1, v = [Yt(e), ["exponential", g], ["number", i]], b = 0, x = o; b < x.length; b += 1) {
                            var w = x[b];
                            Xt(v, w[0], w[1], !1)
                        }
                        return void 0 === e.default ? v : ["case", ["==", ["typeof", i], "number"], v, $t(e.default)]
                    }
                    throw new Error("Unknown property function type " + r)
                }

                function Zt(e) {
                    "step" === e[0] && 3 === e.length && (e.push(0), e.push(e[3]))
                }

                function Xt(e, t, o, r) {
                    e.length > 3 && t === e[e.length - 2] || (r && 2 === e.length || e.push(t), e.push(o))
                }

                function Qt(e, t) {
                    return e.type ? e.type : t.expression.interpolated ? "exponential" : "interval"
                }

                function eo(e) {
                    for (var t = ["concat"], o = /{([^{}]+)}/g, r = 0, i = o.exec(e); null !== i; i = o.exec(e)) {
                        var n = e.slice(r, o.lastIndex - i[0].length);
                        r = o.lastIndex, n.length > 0 && t.push(n), t.push(["get", i[1]])
                    }
                    if (1 === t.length) return e;
                    if (r < e.length) t.push(e.slice(r)); else if (2 === t.length) return ["to-string", t[1]];
                    return t
                }

                function to(e) {
                    if (!0 === e || !1 === e) return !0;
                    if (!Array.isArray(e) || 0 === e.length) return !1;
                    switch (e[0]) {
                        case"has":
                            return e.length >= 2 && "$id" !== e[1] && "$type" !== e[1];
                        case"in":
                        case"!in":
                        case"!has":
                        case"none":
                            return !1;
                        case"==":
                        case"!=":
                        case">":
                        case">=":
                        case"<":
                        case"<=":
                            return 3 !== e.length || Array.isArray(e[1]) || Array.isArray(e[2]);
                        case"any":
                        case"all":
                            for (var t = 0, o = e.slice(1); t < o.length; t += 1) {
                                var r = o[t];
                                if (!to(r) && "boolean" != typeof r) return !1
                            }
                            return !0;
                        default:
                            return !0
                    }
                }

                Wt.deserialize = function (e) {
                    return new Wt(e._parameters, e._specification)
                }, Wt.serialize = function (e) {
                    return {_parameters: e._parameters, _specification: e._specification}
                };
                var oo = {
                    type: "boolean",
                    default: !1,
                    transition: !1,
                    "property-type": "data-driven",
                    expression: {interpolated: !1, parameters: ["zoom", "feature"]}
                };

                function ro(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                }

                function io(e) {
                    if (!e) return !0;
                    var t, o = e[0];
                    return e.length <= 1 ? "any" !== o : "==" === o ? no(e[1], e[2], "==") : "!=" === o ? lo(no(e[1], e[2], "==")) : "<" === o || ">" === o || "<=" === o || ">=" === o ? no(e[1], e[2], o) : "any" === o ? (t = e.slice(1), ["any"].concat(t.map(io))) : "all" === o ? ["all"].concat(e.slice(1).map(io)) : "none" === o ? ["all"].concat(e.slice(1).map(io).map(lo)) : "in" === o ? ao(e[1], e.slice(2)) : "!in" === o ? lo(ao(e[1], e.slice(2))) : "has" === o ? so(e[1]) : "!has" !== o || lo(so(e[1]))
                }

                function no(e, t, o) {
                    switch (e) {
                        case"$type":
                            return ["filter-type-" + o, t];
                        case"$id":
                            return ["filter-id-" + o, t];
                        default:
                            return ["filter-" + o, e, t]
                    }
                }

                function ao(e, t) {
                    if (0 === t.length) return !1;
                    switch (e) {
                        case"$type":
                            return ["filter-type-in", ["literal", t]];
                        case"$id":
                            return ["filter-id-in", ["literal", t]];
                        default:
                            return t.length > 200 && !t.some(function (e) {
                                return typeof e != typeof t[0]
                            }) ? ["filter-in-large", e, ["literal", t.sort(ro)]] : ["filter-in-small", e, ["literal", t]]
                    }
                }

                function so(e) {
                    switch (e) {
                        case"$type":
                            return !0;
                        case"$id":
                            return ["filter-has-id"];
                        default:
                            return ["filter-has", e]
                    }
                }

                function lo(e) {
                    return ["!", e]
                }

                function uo(e) {
                    return function e(t, o) {
                        var r;
                        if (to(t)) return t;
                        if (!t) return !0;
                        var i = t[0];
                        if (t.length <= 1) return "any" !== i;
                        var n;
                        if ("==" === i || "!=" === i || "<" === i || ">" === i || "<=" === i || ">=" === i) {
                            var a = t, s = a[1], l = a[2];
                            n = function (e, t, o, r) {
                                var i;
                                if ("$type" === e) return [o, ["geometry-type"], t];
                                i = "$id" === e ? ["id"] : ["get", e];
                                if (r && null !== t) {
                                    var n = typeof t;
                                    r[e] = n
                                }
                                if ("==" === o && "$id" !== e && null === t) return ["all", ["has", e], ["==", i, null]];
                                if ("!=" === o && "$id" !== e && null === t) return ["any", ["!", ["has", e]], ["!=", i, null]];
                                return [o, i, t]
                            }(s, l, i, o)
                        } else {
                            if ("any" === i) {
                                var u = t.slice(1).map(function (t) {
                                    var o = {}, r = e(t, o), i = function (e) {
                                        var t = [];
                                        for (var o in e) {
                                            var r = "$id" === o ? ["id"] : ["get", o];
                                            t.push(["==", ["typeof", r], e[o]])
                                        }
                                        if (0 === t.length) return !0;
                                        if (1 === t.length) return t[0];
                                        return ["all"].concat(t)
                                    }(o);
                                    return !0 === i ? r : ["case", i, r, !1]
                                });
                                return ["any"].concat(u)
                            }
                            if ("all" === i) {
                                var p = t.slice(1).map(function (t) {
                                    return e(t, o)
                                });
                                return p.length > 1 ? ["all"].concat(p) : (r = []).concat.apply(r, p)
                            }
                            if ("none" === i) return ["!", e(["any"].concat(t.slice(1)), {})];
                            n = "in" === i ? po(t[1], t.slice(2)) : "!in" === i ? po(t[1], t.slice(2), !0) : "has" === i ? co(t[1]) : "!has" !== i || ["!", co(t[1])]
                        }
                        return n
                    }(e, {})
                }

                function po(e, t, o) {
                    if (void 0 === o && (o = !1), 0 === t.length) return o;
                    var r;
                    r = "$type" === e ? ["geometry-type"] : "$id" === e ? ["id"] : ["get", e];
                    for (var i = !0, n = typeof t[0], a = 0, s = t; a < s.length; a += 1) {
                        if (typeof s[a] !== n) {
                            i = !1;
                            break
                        }
                    }
                    return !i || "string" !== n && "number" !== n ? [o ? "all" : "any"].concat(t.map(function (e) {
                        return [o ? "!=" : "==", r, e]
                    })) : ["match", r, t, !o, o]
                }

                function co(e) {
                    return "$type" === e || ("$id" === e ? ["!=", ["id"], null] : ["has", e])
                }

                function ho(e, t) {
                    if (Array.isArray(e)) {
                        if (!Array.isArray(t) || e.length !== t.length) return !1;
                        for (var o = 0; o < e.length; o++) if (!ho(e[o], t[o])) return !1;
                        return !0
                    }
                    if ("object" == typeof e && null !== e && null !== t) {
                        if ("object" != typeof t) return !1;
                        if (Object.keys(e).length !== Object.keys(t).length) return !1;
                        for (var r in e) if (!ho(e[r], t[r])) return !1;
                        return !0
                    }
                    return e === t
                }

                var fo = {
                    setStyle: "setStyle",
                    addLayer: "addLayer",
                    removeLayer: "removeLayer",
                    setPaintProperty: "setPaintProperty",
                    setLayoutProperty: "setLayoutProperty",
                    setFilter: "setFilter",
                    addSource: "addSource",
                    removeSource: "removeSource",
                    setGeoJSONSourceData: "setGeoJSONSourceData",
                    setLayerZoomRange: "setLayerZoomRange",
                    setLayerProperty: "setLayerProperty",
                    setCenter: "setCenter",
                    setZoom: "setZoom",
                    setBearing: "setBearing",
                    setPitch: "setPitch",
                    setSprite: "setSprite",
                    setGlyphs: "setGlyphs",
                    setTransition: "setTransition",
                    setLight: "setLight"
                };

                function yo(e, t, o) {
                    o.push({command: fo.addSource, args: [e, t[e]]})
                }

                function mo(e, t, o) {
                    t.push({command: fo.removeSource, args: [e]}), o[e] = !0
                }

                function go(e, t, o, r) {
                    mo(e, o, r), yo(e, t, o)
                }

                function vo(e, t, o) {
                    var r;
                    for (r in e[o]) if (e[o].hasOwnProperty(r) && "data" !== r && !ho(e[o][r], t[o][r])) return !1;
                    for (r in t[o]) if (t[o].hasOwnProperty(r) && "data" !== r && !ho(e[o][r], t[o][r])) return !1;
                    return !0
                }

                function bo(e, t, o, r, i, n) {
                    var a;
                    for (a in t = t || {}, e = e || {}) e.hasOwnProperty(a) && (ho(e[a], t[a]) || o.push({
                        command: n,
                        args: [r, a, t[a], i]
                    }));
                    for (a in t) t.hasOwnProperty(a) && !e.hasOwnProperty(a) && (ho(e[a], t[a]) || o.push({
                        command: n,
                        args: [r, a, t[a], i]
                    }))
                }

                function xo(e) {
                    return e.id
                }

                function wo(e, t) {
                    return e[t.id] = t, e
                }

                var ko = function (e, t, o, r) {
                    this.message = (e ? e + ": " : "") + o, r && (this.identifier = r), null != t && t.__line__ && (this.line = t.__line__)
                };

                function jo(e) {
                    this.error = e, this.message = e.message;
                    var t = e.message.match(/line (\d+)/);
                    this.line = t ? parseInt(t[1], 10) : 0
                }

                function So(e) {
                    var t = e.key, o = e.value;
                    return o ? [new ko(t, o, "constants have been deprecated as of v8")] : []
                }

                function To(e) {
                    return e instanceof Number || e instanceof String || e instanceof Boolean
                }

                function zo(e) {
                    return To(e) ? e.valueOf() : e
                }

                function _o(e) {
                    if (Array.isArray(e)) return e.map(_o);
                    if (e instanceof Object && !To(e)) {
                        var t = {};
                        for (var o in e) t[o] = _o(e[o]);
                        return t
                    }
                    return zo(e)
                }

                function Ao(e) {
                    var t = e.key, o = e.value, r = e.valueSpec || {}, i = e.objectElementValidators || {}, n = e.style,
                        a = e.styleSpec, s = [], l = Ct(o);
                    if ("object" !== l) return [new ko(t, o, "object expected, " + l + " found")];
                    for (var u in o) {
                        var p = u.split(".")[0], c = r[p] || r["*"], d = void 0;
                        if (i[p]) d = i[p]; else if (r[p]) d = Go; else if (i["*"]) d = i["*"]; else {
                            if (!r["*"]) {
                                s.push(new ko(t, o[u], 'unknown property "' + u + '"'));
                                continue
                            }
                            d = Go
                        }
                        s = s.concat(d({
                            key: (t ? t + "." : t) + u,
                            value: o[u],
                            valueSpec: c,
                            style: n,
                            styleSpec: a,
                            object: o,
                            objectKey: u
                        }, o))
                    }
                    for (var h in r) i[h] || r[h].required && void 0 === r[h].default && void 0 === o[h] && s.push(new ko(t, o, 'missing required property "' + h + '"'));
                    return s
                }

                function Oo(e) {
                    var t = e.value, o = e.valueSpec, r = e.style, i = e.styleSpec, n = e.key,
                        a = e.arrayElementValidator || Go;
                    if ("array" !== Ct(t)) return [new ko(n, t, "array expected, " + Ct(t) + " found")];
                    if (o.length && t.length !== o.length) return [new ko(n, t, "array length " + o.length + " expected, length " + t.length + " found")];
                    if (o["min-length"] && t.length < o["min-length"]) return [new ko(n, t, "array length at least " + o["min-length"] + " expected, length " + t.length + " found")];
                    var s = {type: o.value, values: o.values};
                    i.$version < 7 && (s.function = o.function), "object" === Ct(o.value) && (s = o.value);
                    for (var l = [], u = 0; u < t.length; u++) l = l.concat(a({
                        array: t,
                        arrayIndex: u,
                        value: t[u],
                        valueSpec: s,
                        style: r,
                        styleSpec: i,
                        key: n + "[" + u + "]"
                    }));
                    return l
                }

                function Co(e) {
                    var t = e.key, o = e.value, r = e.valueSpec, i = Ct(o);
                    return "number" !== i ? [new ko(t, o, "number expected, " + i + " found")] : "minimum" in r && o < r.minimum ? [new ko(t, o, o + " is less than the minimum value " + r.minimum)] : "maximum" in r && o > r.maximum ? [new ko(t, o, o + " is greater than the maximum value " + r.maximum)] : []
                }

                function Ro(e) {
                    var t, o, r, i = e.valueSpec, n = zo(e.value.type), a = {},
                        s = "categorical" !== n && void 0 === e.value.property, l = !s,
                        u = "array" === Ct(e.value.stops) && "array" === Ct(e.value.stops[0]) && "object" === Ct(e.value.stops[0][0]),
                        p = Ao({
                            key: e.key,
                            value: e.value,
                            valueSpec: e.styleSpec.function,
                            style: e.style,
                            styleSpec: e.styleSpec,
                            objectElementValidators: {
                                stops: function (e) {
                                    if ("identity" === n) return [new ko(e.key, e.value, 'identity function may not have a "stops" property')];
                                    var t = [], o = e.value;
                                    t = t.concat(Oo({
                                        key: e.key,
                                        value: o,
                                        valueSpec: e.valueSpec,
                                        style: e.style,
                                        styleSpec: e.styleSpec,
                                        arrayElementValidator: c
                                    })), "array" === Ct(o) && 0 === o.length && t.push(new ko(e.key, o, "array must have at least one stop"));
                                    return t
                                }, default: function (e) {
                                    return Go({
                                        key: e.key,
                                        value: e.value,
                                        valueSpec: i,
                                        style: e.style,
                                        styleSpec: e.styleSpec
                                    })
                                }
                            }
                        });
                    return "identity" === n && s && p.push(new ko(e.key, e.value, 'missing required property "property"')), "identity" === n || e.value.stops || p.push(new ko(e.key, e.value, 'missing required property "stops"')), "exponential" === n && e.valueSpec.expression && !Ot(e.valueSpec) && p.push(new ko(e.key, e.value, "exponential functions not supported")), e.styleSpec.$version >= 8 && (l && !_t(e.valueSpec) ? p.push(new ko(e.key, e.value, "property functions not supported")) : s && !At(e.valueSpec) && p.push(new ko(e.key, e.value, "zoom functions not supported"))), "categorical" !== n && !u || void 0 !== e.value.property || p.push(new ko(e.key, e.value, '"property" property is required')), p;

                    function c(e) {
                        var t = [], n = e.value, s = e.key;
                        if ("array" !== Ct(n)) return [new ko(s, n, "array expected, " + Ct(n) + " found")];
                        if (2 !== n.length) return [new ko(s, n, "array length 2 expected, length " + n.length + " found")];
                        if (u) {
                            if ("object" !== Ct(n[0])) return [new ko(s, n, "object expected, " + Ct(n[0]) + " found")];
                            if (void 0 === n[0].zoom) return [new ko(s, n, "object stop key must have zoom")];
                            if (void 0 === n[0].value) return [new ko(s, n, "object stop key must have value")];
                            if (r && r > zo(n[0].zoom)) return [new ko(s, n[0].zoom, "stop zoom values must appear in ascending order")];
                            zo(n[0].zoom) !== r && (r = zo(n[0].zoom), o = void 0, a = {}), t = t.concat(Ao({
                                key: s + "[0]",
                                value: n[0],
                                valueSpec: {zoom: {}},
                                style: e.style,
                                styleSpec: e.styleSpec,
                                objectElementValidators: {zoom: Co, value: d}
                            }))
                        } else t = t.concat(d({
                            key: s + "[0]",
                            value: n[0],
                            valueSpec: {},
                            style: e.style,
                            styleSpec: e.styleSpec
                        }, n));
                        return Dt(_o(n[1])) ? t.concat([new ko(s + "[1]", n[1], "expressions are not allowed in function stops.")]) : t.concat(Go({
                            key: s + "[1]",
                            value: n[1],
                            valueSpec: i,
                            style: e.style,
                            styleSpec: e.styleSpec
                        }))
                    }

                    function d(e, r) {
                        var s = Ct(e.value), l = zo(e.value), u = null !== e.value ? e.value : r;
                        if (t) {
                            if (s !== t) return [new ko(e.key, u, s + " stop domain type must match previous stop domain type " + t)]
                        } else t = s;
                        if ("number" !== s && "string" !== s && "boolean" !== s) return [new ko(e.key, u, "stop domain value must be a number, string, or boolean")];
                        if ("number" !== s && "categorical" !== n) {
                            var p = "number expected, " + s + " found";
                            return _t(i) && void 0 === n && (p += '\nIf you intended to use a categorical function, specify `"type": "categorical"`.'), [new ko(e.key, u, p)]
                        }
                        return "categorical" !== n || "number" !== s || isFinite(l) && Math.floor(l) === l ? "categorical" !== n && "number" === s && void 0 !== o && l < o ? [new ko(e.key, u, "stop domain values must appear in ascending order")] : (o = l, "categorical" === n && l in a ? [new ko(e.key, u, "stop domain values must be unique")] : (a[l] = !0, [])) : [new ko(e.key, u, "integer expected, found " + l)]
                    }
                }

                function Mo(e) {
                    var t = ("property" === e.expressionContext ? Jt : Bt)(_o(e.value), e.valueSpec);
                    if ("error" === t.result) return t.value.map(function (t) {
                        return new ko("" + e.key + t.key, e.value, t.message)
                    });
                    var o = t.value.expression || t.value._styleExpression.expression;
                    if ("property" === e.expressionContext && "text-font" === e.propertyKey && -1 !== o.possibleOutputs().indexOf(void 0)) return [new ko(e.key, e.value, 'Invalid data expression for "' + e.propertyKey + '". Output values must be contained as literals within the expression.')];
                    if ("property" === e.expressionContext && "layout" === e.propertyType && !_e(o)) return [new ko(e.key, e.value, '"feature-state" data expressions are not supported with layout properties.')];
                    if ("filter" === e.expressionContext && !_e(o)) return [new ko(e.key, e.value, '"feature-state" data expressions are not supported with filters.')];
                    if (e.expressionContext && 0 === e.expressionContext.indexOf("cluster")) {
                        if (!Ae(o, ["zoom", "feature-state"])) return [new ko(e.key, e.value, '"zoom" and "feature-state" expressions are not supported with cluster properties.')];
                        if ("cluster-initial" === e.expressionContext && !ze(o)) return [new ko(e.key, e.value, "Feature data expressions are not supported with initial expression part of cluster properties.")]
                    }
                    return []
                }

                function Eo(e) {
                    var t = e.key, o = e.value, r = e.valueSpec, i = [];
                    return Array.isArray(r.values) ? -1 === r.values.indexOf(zo(o)) && i.push(new ko(t, o, "expected one of [" + r.values.join(", ") + "], " + JSON.stringify(o) + " found")) : -1 === Object.keys(r.values).indexOf(zo(o)) && i.push(new ko(t, o, "expected one of [" + Object.keys(r.values).join(", ") + "], " + JSON.stringify(o) + " found")), i
                }

                function Io(e) {
                    return to(_o(e.value)) ? Mo(W({}, e, {
                        expressionContext: "filter",
                        valueSpec: {value: "boolean"}
                    })) : function e(t) {
                        var o = t.value;
                        var r = t.key;
                        if ("array" !== Ct(o)) return [new ko(r, o, "array expected, " + Ct(o) + " found")];
                        var i = t.styleSpec;
                        var n;
                        var a = [];
                        if (o.length < 1) return [new ko(r, o, "filter array must have at least 1 element")];
                        a = a.concat(Eo({
                            key: r + "[0]",
                            value: o[0],
                            valueSpec: i.filter_operator,
                            style: t.style,
                            styleSpec: t.styleSpec
                        }));
                        switch (zo(o[0])) {
                            case"<":
                            case"<=":
                            case">":
                            case">=":
                                o.length >= 2 && "$type" === zo(o[1]) && a.push(new ko(r, o, '"$type" cannot be use with operator "' + o[0] + '"'));
                            case"==":
                            case"!=":
                                3 !== o.length && a.push(new ko(r, o, 'filter array for operator "' + o[0] + '" must have 3 elements'));
                            case"in":
                            case"!in":
                                o.length >= 2 && "string" !== (n = Ct(o[1])) && a.push(new ko(r + "[1]", o[1], "string expected, " + n + " found"));
                                for (var s = 2; s < o.length; s++) n = Ct(o[s]), "$type" === zo(o[1]) ? a = a.concat(Eo({
                                    key: r + "[" + s + "]",
                                    value: o[s],
                                    valueSpec: i.geometry_type,
                                    style: t.style,
                                    styleSpec: t.styleSpec
                                })) : "string" !== n && "number" !== n && "boolean" !== n && a.push(new ko(r + "[" + s + "]", o[s], "string, number, or boolean expected, " + n + " found"));
                                break;
                            case"any":
                            case"all":
                            case"none":
                                for (var l = 1; l < o.length; l++) a = a.concat(e({
                                    key: r + "[" + l + "]",
                                    value: o[l],
                                    style: t.style,
                                    styleSpec: t.styleSpec
                                }));
                                break;
                            case"has":
                            case"!has":
                                n = Ct(o[1]), 2 !== o.length ? a.push(new ko(r, o, 'filter array for "' + o[0] + '" operator must have 2 elements')) : "string" !== n && a.push(new ko(r + "[1]", o[1], "string expected, " + n + " found"))
                        }
                        return a
                    }(e)
                }

                function Po(e, t) {
                    var o = e.key, r = e.style, i = e.styleSpec, n = e.value, a = e.objectKey,
                        s = i[t + "_" + e.layerType];
                    if (!s) return [];
                    var l = a.match(/^(.*)-transition$/);
                    if ("paint" === t && l && s[l[1]] && s[l[1]].transition) return Go({
                        key: o,
                        value: n,
                        valueSpec: i.transition,
                        style: r,
                        styleSpec: i
                    });
                    var u, p = e.valueSpec || s[a];
                    if (!p) return [new ko(o, n, 'unknown property "' + a + '"')];
                    if ("string" === Ct(n) && _t(p) && !p.tokens && (u = /^{([^}]+)}$/.exec(n))) return [new ko(o, n, '"' + a + '" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": ' + JSON.stringify(u[1]) + " }`.")];
                    var c = [];
                    return "symbol" === e.layerType && ("text-field" === a && r && !r.glyphs && c.push(new ko(o, n, 'use of "text-field" requires a style "glyphs" property')), "text-font" === a && Rt(_o(n)) && "identity" === zo(n.type) && c.push(new ko(o, n, '"text-font" does not support identity functions'))), c.concat(Go({
                        key: e.key,
                        value: n,
                        valueSpec: p,
                        style: r,
                        styleSpec: i,
                        expressionContext: "property",
                        propertyType: t,
                        propertyKey: a
                    }))
                }

                function qo(e) {
                    return Po(e, "paint")
                }

                function Lo(e) {
                    return Po(e, "layout")
                }

                function No(e) {
                    var t = [], o = e.value, r = e.key, i = e.style, n = e.styleSpec;
                    o.type || o.ref || t.push(new ko(r, o, 'either "type" or "ref" is required'));
                    var a, s = zo(o.type), l = zo(o.ref);
                    if (o.id) for (var u = zo(o.id), p = 0; p < e.arrayIndex; p++) {
                        var c = i.layers[p];
                        zo(c.id) === u && t.push(new ko(r, o.id, 'duplicate layer id "' + o.id + '", previously used at line ' + c.id.__line__))
                    }
                    if ("ref" in o) ["type", "source", "source-layer", "filter", "layout"].forEach(function (e) {
                        e in o && t.push(new ko(r, o[e], '"' + e + '" is prohibited for ref layers'))
                    }), i.layers.forEach(function (e) {
                        zo(e.id) === l && (a = e)
                    }), a ? a.ref ? t.push(new ko(r, o.ref, "ref cannot reference another ref layer")) : s = zo(a.type) : t.push(new ko(r, o.ref, 'ref layer "' + l + '" not found')); else if ("background" !== s) if (o.source) {
                        var d = i.sources && i.sources[o.source], h = d && zo(d.type);
                        d ? "vector" === h && "raster" === s ? t.push(new ko(r, o.source, 'layer "' + o.id + '" requires a raster source')) : "raster" === h && "raster" !== s ? t.push(new ko(r, o.source, 'layer "' + o.id + '" requires a vector source')) : "vector" !== h || o["source-layer"] ? "raster-dem" === h && "hillshade" !== s ? t.push(new ko(r, o.source, "raster-dem source can only be used with layer type 'hillshade'.")) : "line" !== s || !o.paint || !o.paint["line-gradient"] || "geojson" === h && d.lineMetrics || t.push(new ko(r, o, 'layer "' + o.id + '" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.')) : t.push(new ko(r, o, 'layer "' + o.id + '" must specify a "source-layer"')) : t.push(new ko(r, o.source, 'source "' + o.source + '" not found'))
                    } else t.push(new ko(r, o, 'missing required property "source"'));
                    return t = t.concat(Ao({
                        key: r,
                        value: o,
                        valueSpec: n.layer,
                        style: e.style,
                        styleSpec: e.styleSpec,
                        objectElementValidators: {
                            "*": function () {
                                return []
                            }, type: function () {
                                return Go({
                                    key: r + ".type",
                                    value: o.type,
                                    valueSpec: n.layer.type,
                                    style: e.style,
                                    styleSpec: e.styleSpec,
                                    object: o,
                                    objectKey: "type"
                                })
                            }, filter: Io, layout: function (e) {
                                return Ao({
                                    layer: o,
                                    key: e.key,
                                    value: e.value,
                                    style: e.style,
                                    styleSpec: e.styleSpec,
                                    objectElementValidators: {
                                        "*": function (e) {
                                            return Lo(W({layerType: s}, e))
                                        }
                                    }
                                })
                            }, paint: function (e) {
                                return Ao({
                                    layer: o,
                                    key: e.key,
                                    value: e.value,
                                    style: e.style,
                                    styleSpec: e.styleSpec,
                                    objectElementValidators: {
                                        "*": function (e) {
                                            return qo(W({layerType: s}, e))
                                        }
                                    }
                                })
                            }
                        }
                    }))
                }

                function Fo(e) {
                    var t = e.value, o = e.key, r = e.styleSpec, i = e.style;
                    if (!t.type) return [new ko(o, t, '"type" is required')];
                    var n, a = zo(t.type);
                    switch (a) {
                        case"vector":
                        case"raster":
                        case"raster-dem":
                            if (n = Ao({
                                    key: o,
                                    value: t,
                                    valueSpec: r["source_" + a.replace("-", "_")],
                                    style: e.style,
                                    styleSpec: r
                                }), "url" in t) for (var s in t) ["type", "url", "tileSize"].indexOf(s) < 0 && n.push(new ko(o + "." + s, t[s], 'a source with a "url" property may not include a "' + s + '" property'));
                            return n;
                        case"geojson":
                            if (n = Ao({
                                    key: o,
                                    value: t,
                                    valueSpec: r.source_geojson,
                                    style: i,
                                    styleSpec: r
                                }), t.cluster) for (var l in t.clusterProperties) {
                                var u = t.clusterProperties[l], p = u[0], c = u[1],
                                    d = "string" == typeof p ? [p, ["accumulated"], ["get", l]] : p;
                                n.push.apply(n, Mo({
                                    key: o + "." + l + ".map",
                                    value: c,
                                    expressionContext: "cluster-map"
                                })), n.push.apply(n, Mo({
                                    key: o + "." + l + ".reduce",
                                    value: d,
                                    expressionContext: "cluster-reduce"
                                }))
                            }
                            return n;
                        case"video":
                            return Ao({key: o, value: t, valueSpec: r.source_video, style: i, styleSpec: r});
                        case"image":
                            return Ao({key: o, value: t, valueSpec: r.source_image, style: i, styleSpec: r});
                        case"canvas":
                            return [new ko(o, null, "Please use runtime APIs to add canvas sources, rather than including them in stylesheets.", "source.canvas")];
                        default:
                            return Eo({
                                key: o + ".type",
                                value: t.type,
                                valueSpec: {values: ["vector", "raster", "raster-dem", "geojson", "video", "image"]},
                                style: i,
                                styleSpec: r
                            })
                    }
                }

                function Do(e) {
                    var t = e.value, o = e.styleSpec, r = o.light, i = e.style, n = [], a = Ct(t);
                    if (void 0 === t) return n;
                    if ("object" !== a) return n = n.concat([new ko("light", t, "object expected, " + a + " found")]);
                    for (var s in t) {
                        var l = s.match(/^(.*)-transition$/);
                        n = l && r[l[1]] && r[l[1]].transition ? n.concat(Go({
                            key: s,
                            value: t[s],
                            valueSpec: o.transition,
                            style: i,
                            styleSpec: o
                        })) : r[s] ? n.concat(Go({
                            key: s,
                            value: t[s],
                            valueSpec: r[s],
                            style: i,
                            styleSpec: o
                        })) : n.concat([new ko(s, t[s], 'unknown property "' + s + '"')])
                    }
                    return n
                }

                function Bo(e) {
                    var t = e.value, o = e.key, r = Ct(t);
                    return "string" !== r ? [new ko(o, t, "string expected, " + r + " found")] : []
                }

                var Uo = {
                    "*": function () {
                        return []
                    },
                    array: Oo,
                    boolean: function (e) {
                        var t = e.value, o = e.key, r = Ct(t);
                        return "boolean" !== r ? [new ko(o, t, "boolean expected, " + r + " found")] : []
                    },
                    number: Co,
                    color: function (e) {
                        var t = e.key, o = e.value, r = Ct(o);
                        return "string" !== r ? [new ko(t, o, "color expected, " + r + " found")] : null === se(o) ? [new ko(t, o, 'color expected, "' + o + '" found')] : []
                    },
                    constants: So,
                    enum: Eo,
                    filter: Io,
                    function: Ro,
                    layer: No,
                    object: Ao,
                    source: Fo,
                    light: Do,
                    string: Bo,
                    formatted: function (e) {
                        return 0 === Bo(e).length ? [] : Mo(e)
                    }
                };

                function Go(e) {
                    var t = e.value, o = e.valueSpec, r = e.styleSpec;
                    return o.expression && Rt(zo(t)) ? Ro(e) : o.expression && Dt(_o(t)) ? Mo(e) : o.type && Uo[o.type] ? Uo[o.type](e) : Ao(W({}, e, {valueSpec: o.type ? r[o.type] : o}))
                }

                function Jo(e) {
                    var t = e.value, o = e.key, r = Bo(e);
                    return r.length ? r : (-1 === t.indexOf("{fontstack}") && r.push(new ko(o, t, '"glyphs" url must include a "{fontstack}" token')), -1 === t.indexOf("{range}") && r.push(new ko(o, t, '"glyphs" url must include a "{range}" token')), r)
                }

                function Wo(e, t) {
                    t = t || r;
                    var o = [];
                    return o = o.concat(Go({
                        key: "",
                        value: e,
                        valueSpec: t.$root,
                        styleSpec: t,
                        style: e,
                        objectElementValidators: {
                            glyphs: Jo, "*": function () {
                                return []
                            }
                        }
                    })), e.constants && (o = o.concat(So({
                        key: "constants",
                        value: e.constants,
                        style: e,
                        styleSpec: t
                    }))), $o(o)
                }

                function $o(e) {
                    return [].concat(e).sort(function (e, t) {
                        return e.line - t.line
                    })
                }

                function Vo(e) {
                    return function () {
                        for (var t = arguments, o = [], r = arguments.length; r--;) o[r] = t[r];
                        return $o(e.apply(this, o))
                    }
                }

                Wo.source = Vo(Fo), Wo.light = Vo(Do), Wo.layer = Vo(No), Wo.filter = Vo(Io), Wo.paintProperty = Vo(qo), Wo.layoutProperty = Vo(Lo);
                var Yo = l(function (e, t) {
                    var o = function () {
                        var e = function (e, t, o, r) {
                                for (o = o || {}, r = e.length; r--; o[e[r]] = t) ;
                                return o
                            }, t = [1, 12], o = [1, 13], r = [1, 9], i = [1, 10], n = [1, 11], a = [1, 14], s = [1, 15],
                            l = [14, 18, 22, 24], u = [18, 22], p = [22, 24], c = {
                                trace: function () {
                                },
                                yy: {},
                                symbols_: {
                                    error: 2,
                                    JSONString: 3,
                                    STRING: 4,
                                    JSONNumber: 5,
                                    NUMBER: 6,
                                    JSONNullLiteral: 7,
                                    NULL: 8,
                                    JSONBooleanLiteral: 9,
                                    TRUE: 10,
                                    FALSE: 11,
                                    JSONText: 12,
                                    JSONValue: 13,
                                    EOF: 14,
                                    JSONObject: 15,
                                    JSONArray: 16,
                                    "{": 17,
                                    "}": 18,
                                    JSONMemberList: 19,
                                    JSONMember: 20,
                                    ":": 21,
                                    ",": 22,
                                    "[": 23,
                                    "]": 24,
                                    JSONElementList: 25,
                                    $accept: 0,
                                    $end: 1
                                },
                                terminals_: {
                                    2: "error",
                                    4: "STRING",
                                    6: "NUMBER",
                                    8: "NULL",
                                    10: "TRUE",
                                    11: "FALSE",
                                    14: "EOF",
                                    17: "{",
                                    18: "}",
                                    21: ":",
                                    22: ",",
                                    23: "[",
                                    24: "]"
                                },
                                productions_: [0, [3, 1], [5, 1], [7, 1], [9, 1], [9, 1], [12, 2], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [15, 2], [15, 3], [20, 3], [19, 1], [19, 3], [16, 2], [16, 3], [25, 1], [25, 3]],
                                performAction: function (e, t, o, r, i, n, a) {
                                    var s = n.length - 1;
                                    switch (i) {
                                        case 1:
                                            this.$ = new String(e.replace(/\\(\\|")/g, "$1").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\v/g, "\v").replace(/\\f/g, "\f").replace(/\\b/g, "\b")), this.$.__line__ = this._$.first_line;
                                            break;
                                        case 2:
                                            this.$ = new Number(e), this.$.__line__ = this._$.first_line;
                                            break;
                                        case 3:
                                            this.$ = null;
                                            break;
                                        case 4:
                                            this.$ = new Boolean(!0), this.$.__line__ = this._$.first_line;
                                            break;
                                        case 5:
                                            this.$ = new Boolean(!1), this.$.__line__ = this._$.first_line;
                                            break;
                                        case 6:
                                            return this.$ = n[s - 1];
                                        case 13:
                                            this.$ = {}, Object.defineProperty(this.$, "__line__", {
                                                value: this._$.first_line,
                                                enumerable: !1
                                            });
                                            break;
                                        case 14:
                                        case 19:
                                            this.$ = n[s - 1], Object.defineProperty(this.$, "__line__", {
                                                value: this._$.first_line,
                                                enumerable: !1
                                            });
                                            break;
                                        case 15:
                                            this.$ = [n[s - 2], n[s]];
                                            break;
                                        case 16:
                                            this.$ = {}, this.$[n[s][0]] = n[s][1];
                                            break;
                                        case 17:
                                            this.$ = n[s - 2], n[s - 2][n[s][0]] = n[s][1];
                                            break;
                                        case 18:
                                            this.$ = [], Object.defineProperty(this.$, "__line__", {
                                                value: this._$.first_line,
                                                enumerable: !1
                                            });
                                            break;
                                        case 20:
                                            this.$ = [n[s]];
                                            break;
                                        case 21:
                                            this.$ = n[s - 2], n[s - 2].push(n[s])
                                    }
                                },
                                table: [{
                                    3: 5,
                                    4: t,
                                    5: 6,
                                    6: o,
                                    7: 3,
                                    8: r,
                                    9: 4,
                                    10: i,
                                    11: n,
                                    12: 1,
                                    13: 2,
                                    15: 7,
                                    16: 8,
                                    17: a,
                                    23: s
                                }, {1: [3]}, {14: [1, 16]}, e(l, [2, 7]), e(l, [2, 8]), e(l, [2, 9]), e(l, [2, 10]), e(l, [2, 11]), e(l, [2, 12]), e(l, [2, 3]), e(l, [2, 4]), e(l, [2, 5]), e([14, 18, 21, 22, 24], [2, 1]), e(l, [2, 2]), {
                                    3: 20,
                                    4: t,
                                    18: [1, 17],
                                    19: 18,
                                    20: 19
                                }, {
                                    3: 5,
                                    4: t,
                                    5: 6,
                                    6: o,
                                    7: 3,
                                    8: r,
                                    9: 4,
                                    10: i,
                                    11: n,
                                    13: 23,
                                    15: 7,
                                    16: 8,
                                    17: a,
                                    23: s,
                                    24: [1, 21],
                                    25: 22
                                }, {1: [2, 6]}, e(l, [2, 13]), {
                                    18: [1, 24],
                                    22: [1, 25]
                                }, e(u, [2, 16]), {21: [1, 26]}, e(l, [2, 18]), {
                                    22: [1, 28],
                                    24: [1, 27]
                                }, e(p, [2, 20]), e(l, [2, 14]), {3: 20, 4: t, 20: 29}, {
                                    3: 5,
                                    4: t,
                                    5: 6,
                                    6: o,
                                    7: 3,
                                    8: r,
                                    9: 4,
                                    10: i,
                                    11: n,
                                    13: 30,
                                    15: 7,
                                    16: 8,
                                    17: a,
                                    23: s
                                }, e(l, [2, 19]), {
                                    3: 5,
                                    4: t,
                                    5: 6,
                                    6: o,
                                    7: 3,
                                    8: r,
                                    9: 4,
                                    10: i,
                                    11: n,
                                    13: 31,
                                    15: 7,
                                    16: 8,
                                    17: a,
                                    23: s
                                }, e(u, [2, 17]), e(u, [2, 15]), e(p, [2, 21])],
                                defaultActions: {16: [2, 6]},
                                parseError: function (e, t) {
                                    if (!t.recoverable) throw new Error(e);
                                    this.trace(e)
                                },
                                parse: function (e) {
                                    var t = this, o = [0], r = [null], i = [], n = this.table, a = "", s = 0, l = 0, u = 2,
                                        p = 1, c = i.slice.call(arguments, 1), d = Object.create(this.lexer), h = {yy: {}};
                                    for (var f in this.yy) Object.prototype.hasOwnProperty.call(this.yy, f) && (h.yy[f] = this.yy[f]);
                                    d.setInput(e, h.yy), h.yy.lexer = d, h.yy.parser = this, void 0 === d.yylloc && (d.yylloc = {});
                                    var y = d.yylloc;
                                    i.push(y);
                                    var m = d.options && d.options.ranges;

                                    function g() {
                                        var e;
                                        return "number" != typeof(e = d.lex() || p) && (e = t.symbols_[e] || e), e
                                    }

                                    "function" == typeof h.yy.parseError ? this.parseError = h.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
                                    for (var v, b, x, w, k, j, S, T, z, _ = {}; ;) {
                                        if (x = o[o.length - 1], this.defaultActions[x] ? w = this.defaultActions[x] : (null == v && (v = g()), w = n[x] && n[x][v]), void 0 === w || !w.length || !w[0]) {
                                            var A = "";
                                            for (j in z = [], n[x]) this.terminals_[j] && j > u && z.push("'" + this.terminals_[j] + "'");
                                            A = d.showPosition ? "Parse error on line " + (s + 1) + ":\n" + d.showPosition() + "\nExpecting " + z.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : "Parse error on line " + (s + 1) + ": Unexpected " + (v == p ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), this.parseError(A, {
                                                text: d.match,
                                                token: this.terminals_[v] || v,
                                                line: d.yylineno,
                                                loc: y,
                                                expected: z
                                            })
                                        }
                                        if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + x + ", token: " + v);
                                        switch (w[0]) {
                                            case 1:
                                                o.push(v), r.push(d.yytext), i.push(d.yylloc), o.push(w[1]), v = null, b ? (v = b, b = null) : (l = d.yyleng, a = d.yytext, s = d.yylineno, y = d.yylloc);
                                                break;
                                            case 2:
                                                if (S = this.productions_[w[1]][1], _.$ = r[r.length - S], _._$ = {
                                                        first_line: i[i.length - (S || 1)].first_line,
                                                        last_line: i[i.length - 1].last_line,
                                                        first_column: i[i.length - (S || 1)].first_column,
                                                        last_column: i[i.length - 1].last_column
                                                    }, m && (_._$.range = [i[i.length - (S || 1)].range[0], i[i.length - 1].range[1]]), void 0 !== (k = this.performAction.apply(_, [a, l, s, h.yy, w[1], r, i].concat(c)))) return k;
                                                S && (o = o.slice(0, -1 * S * 2), r = r.slice(0, -1 * S), i = i.slice(0, -1 * S)), o.push(this.productions_[w[1]][0]), r.push(_.$), i.push(_._$), T = n[o[o.length - 2]][o[o.length - 1]], o.push(T);
                                                break;
                                            case 3:
                                                return !0
                                        }
                                    }
                                    return !0
                                }
                            }, d = {
                                EOF: 1,
                                parseError: function (e, t) {
                                    if (!this.yy.parser) throw new Error(e);
                                    this.yy.parser.parseError(e, t)
                                },
                                setInput: function (e, t) {
                                    return this.yy = t || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                        first_line: 1,
                                        first_column: 0,
                                        last_line: 1,
                                        last_column: 0
                                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                                },
                                input: function () {
                                    var e = this._input[0];
                                    return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
                                },
                                unput: function (e) {
                                    var t = e.length, o = e.split(/(?:\r\n?|\n)/g);
                                    this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t), this.offset -= t;
                                    var r = this.match.split(/(?:\r\n?|\n)/g);
                                    this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), o.length - 1 && (this.yylineno -= o.length - 1);
                                    var i = this.yylloc.range;
                                    return this.yylloc = {
                                        first_line: this.yylloc.first_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.first_column,
                                        last_column: o ? (o.length === r.length ? this.yylloc.first_column : 0) + r[r.length - o.length].length - o[0].length : this.yylloc.first_column - t
                                    }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this.yyleng = this.yytext.length, this
                                },
                                more: function () {
                                    return this._more = !0, this
                                },
                                reject: function () {
                                    return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
                                        text: "",
                                        token: null,
                                        line: this.yylineno
                                    })
                                },
                                less: function (e) {
                                    this.unput(this.match.slice(e))
                                },
                                pastInput: function () {
                                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                                },
                                upcomingInput: function () {
                                    var e = this.match;
                                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                                },
                                showPosition: function () {
                                    var e = this.pastInput(), t = new Array(e.length + 1).join("-");
                                    return e + this.upcomingInput() + "\n" + t + "^"
                                },
                                test_match: function (e, t) {
                                    var o, r, i;
                                    if (this.options.backtrack_lexer && (i = {
                                            yylineno: this.yylineno,
                                            yylloc: {
                                                first_line: this.yylloc.first_line,
                                                last_line: this.last_line,
                                                first_column: this.yylloc.first_column,
                                                last_column: this.yylloc.last_column
                                            },
                                            yytext: this.yytext,
                                            match: this.match,
                                            matches: this.matches,
                                            matched: this.matched,
                                            yyleng: this.yyleng,
                                            offset: this.offset,
                                            _more: this._more,
                                            _input: this._input,
                                            yy: this.yy,
                                            conditionStack: this.conditionStack.slice(0),
                                            done: this.done
                                        }, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), (r = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += r.length), this.yylloc = {
                                            first_line: this.yylloc.last_line,
                                            last_line: this.yylineno + 1,
                                            first_column: this.yylloc.last_column,
                                            last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                                        }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], o = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), o) return o;
                                    if (this._backtrack) {
                                        for (var n in i) this[n] = i[n];
                                        return !1
                                    }
                                    return !1
                                },
                                next: function () {
                                    if (this.done) return this.EOF;
                                    var e, t, o, r;
                                    this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
                                    for (var i = this._currentRules(), n = 0; n < i.length; n++) if ((o = this._input.match(this.rules[i[n]])) && (!t || o[0].length > t[0].length)) {
                                        if (t = o, r = n, this.options.backtrack_lexer) {
                                            if (!1 !== (e = this.test_match(o, i[n]))) return e;
                                            if (this._backtrack) {
                                                t = !1;
                                                continue
                                            }
                                            return !1
                                        }
                                        if (!this.options.flex) break
                                    }
                                    return t ? !1 !== (e = this.test_match(t, i[r])) && e : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                        text: "",
                                        token: null,
                                        line: this.yylineno
                                    })
                                },
                                lex: function () {
                                    var e = this.next();
                                    return e || this.lex()
                                },
                                begin: function (e) {
                                    this.conditionStack.push(e)
                                },
                                popState: function () {
                                    return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0]
                                },
                                _currentRules: function () {
                                    return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules
                                },
                                topState: function (e) {
                                    return (e = this.conditionStack.length - 1 - Math.abs(e || 0)) >= 0 ? this.conditionStack[e] : "INITIAL"
                                },
                                pushState: function (e) {
                                    this.begin(e)
                                },
                                stateStackSize: function () {
                                    return this.conditionStack.length
                                },
                                options: {},
                                performAction: function (e, t, o, r) {
                                    switch (o) {
                                        case 0:
                                            break;
                                        case 1:
                                            return 6;
                                        case 2:
                                            return t.yytext = t.yytext.substr(1, t.yyleng - 2), 4;
                                        case 3:
                                            return 17;
                                        case 4:
                                            return 18;
                                        case 5:
                                            return 23;
                                        case 6:
                                            return 24;
                                        case 7:
                                            return 22;
                                        case 8:
                                            return 21;
                                        case 9:
                                            return 10;
                                        case 10:
                                            return 11;
                                        case 11:
                                            return 8;
                                        case 12:
                                            return 14;
                                        case 13:
                                            return "INVALID"
                                    }
                                },
                                rules: [/^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt\/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/],
                                conditions: {
                                    INITIAL: {
                                        rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                                        inclusive: !0
                                    }
                                }
                            };

                        function h() {
                            this.yy = {}
                        }

                        return c.lexer = d, h.prototype = c, c.Parser = h, new h
                    }();
                    t.parser = o, t.Parser = o.Parser, t.parse = function () {
                        return o.parse.apply(o, arguments)
                    }
                });

                function Ho(e, t) {
                    if (e instanceof String || "string" == typeof e || e instanceof o) try {
                        e = Yo.parse(e.toString())
                    } catch (e) {
                        return [new jo(e)]
                    }
                    return Wo(e, t = t || r)
                }

                Yo.parser, Yo.Parser, Yo.parse;
                var Ko = {
                        StyleExpression: Ft,
                        isExpression: Dt,
                        createExpression: Bt,
                        createPropertyExpression: Jt,
                        normalizePropertyExpression: function (e, t) {
                            if (Rt(e)) return new Wt(e, t);
                            if (Dt(e)) {
                                var o = Jt(e, t);
                                if ("error" === o.result) throw new Error(o.value.map(function (e) {
                                    return e.key + ": " + e.message
                                }).join(", "));
                                return o.value
                            }
                            var r = e;
                            return "string" == typeof e && "color" === t.type && (r = le.parse(e)), {
                                kind: "constant",
                                evaluate: function () {
                                    return r
                                }
                            }
                        },
                        ZoomConstantExpression: Ut,
                        ZoomDependentExpression: Gt,
                        StylePropertyFunction: Wt
                    }, Zo = {convertFunction: Vt, createFunction: Et, isFunction: Rt},
                    Xo = {eachSource: L, eachLayer: N, eachProperty: F};
                Ho.parsed = Ho, Ho.latest = Ho, t.Color = le, t.ParsingError = jo, t.ValidationError = ko, t.composite = function (e) {
                    var t = [], o = [], r = [];
                    for (var i in e.sources) {
                        var n = e.sources[i];
                        if ("vector" === n.type) {
                            var a = /^mapbox:\/\/(.*)/.exec(n.url);
                            a && (t.push(i), o.push(a[1]))
                        }
                    }
                    if (t.length < 2) return e;
                    t.forEach(function (t) {
                        delete e.sources[t]
                    });
                    var s = o.join(",");
                    return e.sources[s] = {type: "vector", url: "mapbox://" + s}, e.layers.forEach(function (e) {
                        if (t.indexOf(e.source) >= 0 && (e.source = s, "source-layer" in e)) {
                            if (r.indexOf(e["source-layer"]) >= 0) throw new Error("Conflicting source layer names");
                            r.push(e["source-layer"])
                        }
                    }), e
                }, t.diff = function (e, t) {
                    if (!e) return [{command: fo.setStyle, args: [t]}];
                    var o = [];
                    try {
                        if (!ho(e.version, t.version)) return [{command: fo.setStyle, args: [t]}];
                        ho(e.center, t.center) || o.push({
                            command: fo.setCenter,
                            args: [t.center]
                        }), ho(e.zoom, t.zoom) || o.push({
                            command: fo.setZoom,
                            args: [t.zoom]
                        }), ho(e.bearing, t.bearing) || o.push({
                            command: fo.setBearing,
                            args: [t.bearing]
                        }), ho(e.pitch, t.pitch) || o.push({
                            command: fo.setPitch,
                            args: [t.pitch]
                        }), ho(e.sprite, t.sprite) || o.push({
                            command: fo.setSprite,
                            args: [t.sprite]
                        }), ho(e.glyphs, t.glyphs) || o.push({
                            command: fo.setGlyphs,
                            args: [t.glyphs]
                        }), ho(e.transition, t.transition) || o.push({
                            command: fo.setTransition,
                            args: [t.transition]
                        }), ho(e.light, t.light) || o.push({command: fo.setLight, args: [t.light]});
                        var r = {}, i = [];
                        !function (e, t, o, r) {
                            var i;
                            for (i in t = t || {}, e = e || {}) e.hasOwnProperty(i) && (t.hasOwnProperty(i) || mo(i, o, r));
                            for (i in t) t.hasOwnProperty(i) && (e.hasOwnProperty(i) ? ho(e[i], t[i]) || ("geojson" === e[i].type && "geojson" === t[i].type && vo(e, t, i) ? o.push({
                                command: fo.setGeoJSONSourceData,
                                args: [i, t[i].data]
                            }) : go(i, t, o, r)) : yo(i, t, o))
                        }(e.sources, t.sources, i, r);
                        var n = [];
                        e.layers && e.layers.forEach(function (e) {
                            r[e.source] ? o.push({command: fo.removeLayer, args: [e.id]}) : n.push(e)
                        }), o = o.concat(i), function (e, t, o) {
                            t = t || [];
                            var r, i, n, a, s, l, u, p = (e = e || []).map(xo), c = t.map(xo), d = e.reduce(wo, {}),
                                h = t.reduce(wo, {}), f = p.slice(), y = Object.create(null);
                            for (r = 0, i = 0; r < p.length; r++) n = p[r], h.hasOwnProperty(n) ? i++ : (o.push({
                                command: fo.removeLayer,
                                args: [n]
                            }), f.splice(f.indexOf(n, i), 1));
                            for (r = 0, i = 0; r < c.length; r++) n = c[c.length - 1 - r], f[f.length - 1 - r] !== n && (d.hasOwnProperty(n) ? (o.push({
                                command: fo.removeLayer,
                                args: [n]
                            }), f.splice(f.lastIndexOf(n, f.length - i), 1)) : i++, l = f[f.length - r], o.push({
                                command: fo.addLayer,
                                args: [h[n], l]
                            }), f.splice(f.length - r, 0, n), y[n] = !0);
                            for (r = 0; r < c.length; r++) if (a = d[n = c[r]], s = h[n], !y[n] && !ho(a, s)) if (ho(a.source, s.source) && ho(a["source-layer"], s["source-layer"]) && ho(a.type, s.type)) {
                                for (u in bo(a.layout, s.layout, o, n, null, fo.setLayoutProperty), bo(a.paint, s.paint, o, n, null, fo.setPaintProperty), ho(a.filter, s.filter) || o.push({
                                    command: fo.setFilter,
                                    args: [n, s.filter]
                                }), ho(a.minzoom, s.minzoom) && ho(a.maxzoom, s.maxzoom) || o.push({
                                    command: fo.setLayerZoomRange,
                                    args: [n, s.minzoom, s.maxzoom]
                                }), a) a.hasOwnProperty(u) && "layout" !== u && "paint" !== u && "filter" !== u && "metadata" !== u && "minzoom" !== u && "maxzoom" !== u && (0 === u.indexOf("paint.") ? bo(a[u], s[u], o, n, u.slice(6), fo.setPaintProperty) : ho(a[u], s[u]) || o.push({
                                    command: fo.setLayerProperty,
                                    args: [n, u, s[u]]
                                }));
                                for (u in s) s.hasOwnProperty(u) && !a.hasOwnProperty(u) && "layout" !== u && "paint" !== u && "filter" !== u && "metadata" !== u && "minzoom" !== u && "maxzoom" !== u && (0 === u.indexOf("paint.") ? bo(a[u], s[u], o, n, u.slice(6), fo.setPaintProperty) : ho(a[u], s[u]) || o.push({
                                    command: fo.setLayerProperty,
                                    args: [n, u, s[u]]
                                }))
                            } else o.push({
                                command: fo.removeLayer,
                                args: [n]
                            }), l = f[f.lastIndexOf(n) + 1], o.push({command: fo.addLayer, args: [s, l]})
                        }(n, t.layers, o)
                    } catch (e) {
                        console.warn("Unable to compute style diff:", e), o = [{command: fo.setStyle, args: [t]}]
                    }
                    return o
                }, t.expression = Ko, t.featureFilter = function (e) {
                    if (null == e) return function () {
                        return !0
                    };
                    to(e) || (e = io(e));
                    var t = Bt(e, oo);
                    if ("error" === t.result) throw new Error(t.value.map(function (e) {
                        return e.key + ": " + e.message
                    }).join(", "));
                    return function (e, o) {
                        return t.value.evaluate(e, o)
                    }
                }, t.format = function (e, t) {
                    return void 0 === t && (t = 2), (e = a(e, r.$root)).layers && (e.layers = e.layers.map(function (e) {
                        return a(e, r.layer)
                    })), n(e, {indent: t})
                }, t.function = Zo, t.latest = r, t.migrate = function (e) {
                    var t = !1;
                    if (7 === e.version && (e = J(e), t = !0), 8 === e.version && (t = function (e) {
                            var t = [];
                            return N(e, function (e) {
                                e.filter && (e.filter = uo(e.filter))
                            }), F(e, {paint: !0, layout: !0}, function (e) {
                                var o = e.path, r = e.value, i = e.reference, n = e.set;
                                Dt(r) || ("object" != typeof r || Array.isArray(r) ? i.tokens && "string" == typeof r && n(eo(r)) : (n(Vt(r, i)), t.push(o.join("."))))
                            }), e
                        }(e), t = !0), !t) throw new Error("cannot migrate from", e.version);
                    return e
                }, t.v8 = r, t.validate = Ho, t.visit = Xo, Object.defineProperty(t, "__esModule", {value: !0})
            })(t)
        }).call(this, o(15), o(25).Buffer)
    }, function (e, t) {
        e.exports = ol.style.Style
    }, function (e, t) {
        e.exports = ol.style.Fill
    }, function (e, t) {
        e.exports = ol.style.Stroke
    }, function (e, t) {
        e.exports = ol.Map
    }, function (e, t) {
        e.exports = ol.Observable
    }, function (e, t) {
        var o = {
            thin: 100,
            hairline: 100,
            "ultra-light": 100,
            "extra-light": 100,
            light: 200,
            book: 300,
            regular: 400,
            normal: 400,
            plain: 400,
            roman: 400,
            standard: 400,
            medium: 500,
            "semi-bold": 600,
            "demi-bold": 600,
            bold: 700,
            heavy: 800,
            black: 800,
            "extra-bold": 800,
            "ultra-black": 900,
            "extra-black": 900,
            "ultra-bold": 900,
            "heavy-black": 900,
            fat: 900,
            poster: 900
        }, r = /(italic|oblique)$/i, i = {};
        e.exports = function (e, t, n) {
            var a = i[e];
            if (!a) {
                Array.isArray(e) || (e = [e]);
                for (var s = 400, l = "normal", u = [], p = 0, c = e.length; p < c; ++p) {
                    var d = e[p].split(" "), h = d[d.length - 1].toLowerCase();
                    for (var f in"normal" == h || "italic" == h || "oblique" == h ? (l = h, d.pop(), h = d[d.length - 1].toLowerCase()) : r.test(h) && (h = h.replace(r, ""), l = d[d.length - 1].replace(h, "")), o) if (h == f || h == f.replace("-", "") || h == f.replace("-", " ")) {
                        s = o[f], d.pop();
                        break
                    }
                    "number" == typeof h && (s = h);
                    var y = d.join(" ").replace("Klokantech Noto Sans", "Noto Sans");
                    -1 !== y.indexOf(" ") && (y = '"' + y + '"'), u.push(y)
                }
                a = i[e] = [l, s, u]
            }
            return a[0] + " " + a[1] + " " + t + "px" + (n ? "/" + n : "") + " " + a[2]
        }
    }, function (e, t) {
        e.exports = ol.proj
    }, function (e, t) {
        e.exports = ol.style.Icon
    }, function (e, t) {
        e.exports = ol.tilegrid.TileGrid
    }, function (e, t) {
        e.exports = ol.layer.Vector
    }, function (e, t) {
        e.exports = ol.layer.VectorTile
    }, function (e, t) {
        e.exports = ol.source.TileJSON
    }, function (e, t) {
        e.exports = ol.source.Vector
    }, function (e, t) {
        e.exports = ol.source.VectorTile
    }, function (e, t) {
        var o;
        o = function () {
            return this
        }();
        try {
            o = o || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (o = window)
        }
        e.exports = o
    }, function (e, t) {
        e.exports = ol.style.Circle
    }, function (e, t) {
        e.exports = ol.geom.Point
    }, function (e) {
        e.exports = JSON.parse('{"$version":8,"$root":{"version":{"required":true,"type":"enum","values":[8],"doc":"Style specification version number. Must be 8.","example":8},"name":{"type":"string","doc":"A human-readable name for the style.","example":"Bright"},"metadata":{"type":"*","doc":"Arbitrary properties useful to track with the stylesheet, but do not influence rendering. Properties should be prefixed to avoid collisions, like \'mapbox:\'."},"center":{"type":"array","value":"number","doc":"Default map center in longitude and latitude.  The style center will be used only if the map has not been positioned by other means (e.g. map options or user interaction).","example":[-73.9749,40.7736]},"zoom":{"type":"number","doc":"Default zoom level.  The style zoom will be used only if the map has not been positioned by other means (e.g. map options or user interaction).","example":12.5},"bearing":{"type":"number","default":0,"period":360,"units":"degrees","doc":"Default bearing, in degrees. The bearing is the compass direction that is \\"up\\"; for example, a bearing of 90° orients the map so that east is up. This value will be used only if the map has not been positioned by other means (e.g. map options or user interaction).","example":29},"pitch":{"type":"number","default":0,"units":"degrees","doc":"Default pitch, in degrees. Zero is perpendicular to the surface, for a look straight down at the map, while a greater value like 60 looks ahead towards the horizon. The style pitch will be used only if the map has not been positioned by other means (e.g. map options or user interaction).","example":50},"light":{"type":"light","doc":"The global light source.","example":{"anchor":"viewport","color":"white","intensity":0.4}},"sources":{"required":true,"type":"sources","doc":"Data source specifications.","example":{"mapbox-streets":{"type":"vector","url":"mapbox://mapbox.mapbox-streets-v6"}}},"sprite":{"type":"string","doc":"A base URL for retrieving the sprite image and metadata. The extensions `.png`, `.json` and scale factor `@2x.png` will be automatically appended. This property is required if any layer uses the `background-pattern`, `fill-pattern`, `line-pattern`, `fill-extrusion-pattern`, or `icon-image` properties. The URL must be absolute, containing the [scheme, authority and path components](https://en.wikipedia.org/wiki/URL#Syntax).","example":"mapbox://sprites/mapbox/bright-v8"},"glyphs":{"type":"string","doc":"A URL template for loading signed-distance-field glyph sets in PBF format. The URL must include `{fontstack}` and `{range}` tokens. This property is required if any layer uses the `text-field` layout property. The URL must be absolute, containing the [scheme, authority and path components](https://en.wikipedia.org/wiki/URL#Syntax).","example":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf"},"transition":{"type":"transition","doc":"A global transition definition to use as a default across properties, to be used for timing transitions between one value and the next when no property-specific transition is set. Collision-based symbol fading is controlled independently of the style\'s `transition` property.","example":{"duration":300,"delay":0}},"layers":{"required":true,"type":"array","value":"layer","doc":"Layers will be drawn in the order of this array.","example":[{"id":"water","source":"mapbox-streets","source-layer":"water","type":"fill","paint":{"fill-color":"#00ffff"}}]}},"sources":{"*":{"type":"source","doc":"Specification of a data source. For vector and raster sources, either TileJSON or a URL to a TileJSON must be provided. For image and video sources, a URL must be provided. For GeoJSON sources, a URL or inline GeoJSON must be provided."}},"source":["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],"source_vector":{"type":{"required":true,"type":"enum","values":{"vector":{"doc":"A vector tile source."}},"doc":"The type of the source."},"url":{"type":"string","doc":"A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<mapid>`."},"tiles":{"type":"array","value":"string","doc":"An array of one or more tile source URLs, as in the TileJSON spec."},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.051129,180,85.051129],"doc":"An array containing the longitude and latitude of the southwest and northeast corners of the source\'s bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."},"scheme":{"type":"enum","values":{"xyz":{"doc":"Slippy map tilenames scheme."},"tms":{"doc":"OSGeo spec scheme."}},"default":"xyz","doc":"Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed."},"minzoom":{"type":"number","default":0,"doc":"Minimum zoom level for which tiles are available, as in the TileJSON spec."},"maxzoom":{"type":"number","default":22,"doc":"Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."},"attribution":{"type":"string","doc":"Contains an attribution to be displayed when the map is shown to a user."},"*":{"type":"*","doc":"Other keys to configure the data source."}},"source_raster":{"type":{"required":true,"type":"enum","values":{"raster":{"doc":"A raster tile source."}},"doc":"The type of the source."},"url":{"type":"string","doc":"A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<mapid>`."},"tiles":{"type":"array","value":"string","doc":"An array of one or more tile source URLs, as in the TileJSON spec."},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.051129,180,85.051129],"doc":"An array containing the longitude and latitude of the southwest and northeast corners of the source\'s bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."},"minzoom":{"type":"number","default":0,"doc":"Minimum zoom level for which tiles are available, as in the TileJSON spec."},"maxzoom":{"type":"number","default":22,"doc":"Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."},"tileSize":{"type":"number","default":512,"units":"pixels","doc":"The minimum visual size to display tiles for this layer. Only configurable for raster layers."},"scheme":{"type":"enum","values":{"xyz":{"doc":"Slippy map tilenames scheme."},"tms":{"doc":"OSGeo spec scheme."}},"default":"xyz","doc":"Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed."},"attribution":{"type":"string","doc":"Contains an attribution to be displayed when the map is shown to a user."},"*":{"type":"*","doc":"Other keys to configure the data source."}},"source_raster_dem":{"type":{"required":true,"type":"enum","values":{"raster-dem":{"doc":"A RGB-encoded raster DEM source"}},"doc":"The type of the source."},"url":{"type":"string","doc":"A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<mapid>`."},"tiles":{"type":"array","value":"string","doc":"An array of one or more tile source URLs, as in the TileJSON spec."},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.051129,180,85.051129],"doc":"An array containing the longitude and latitude of the southwest and northeast corners of the source\'s bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. When this property is included in a source, no tiles outside of the given bounds are requested by Mapbox GL."},"minzoom":{"type":"number","default":0,"doc":"Minimum zoom level for which tiles are available, as in the TileJSON spec."},"maxzoom":{"type":"number","default":22,"doc":"Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels."},"tileSize":{"type":"number","default":512,"units":"pixels","doc":"The minimum visual size to display tiles for this layer. Only configurable for raster layers."},"attribution":{"type":"string","doc":"Contains an attribution to be displayed when the map is shown to a user."},"encoding":{"type":"enum","values":{"terrarium":{"doc":"Terrarium format PNG tiles. See https://aws.amazon.com/es/public-datasets/terrain/ for more info."},"mapbox":{"doc":"Mapbox Terrain RGB tiles. See https://www.mapbox.com/help/access-elevation-data/#mapbox-terrain-rgb for more info."}},"default":"mapbox","doc":"The encoding used by this source. Mapbox Terrain RGB is used by default"},"*":{"type":"*","doc":"Other keys to configure the data source."}},"source_geojson":{"type":{"required":true,"type":"enum","values":{"geojson":{"doc":"A GeoJSON data source."}},"doc":"The data type of the GeoJSON source."},"data":{"type":"*","doc":"A URL to a GeoJSON file, or inline GeoJSON."},"maxzoom":{"type":"number","default":18,"doc":"Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels)."},"attribution":{"type":"string","doc":"Contains an attribution to be displayed when the map is shown to a user."},"buffer":{"type":"number","default":128,"maximum":512,"minimum":0,"doc":"Size of the tile buffer on each side. A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance."},"tolerance":{"type":"number","default":0.375,"doc":"Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance)."},"cluster":{"type":"boolean","default":false,"doc":"If the data is a collection of point features, setting this to true clusters the points by radius into groups. Cluster groups become new `Point` features in the source with additional properties:\\n * `cluster` Is `true` if the point is a cluster \\n * `cluster_id` A unqiue id for the cluster to be used in conjunction with the [cluster inspection methods](https://www.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterexpansionzoom)\\n * `point_count` Number of original points grouped into this cluster\\n * `point_count_abbreviated` An abbreviated point count"},"clusterRadius":{"type":"number","default":50,"minimum":0,"doc":"Radius of each cluster if clustering is enabled. A value of 512 indicates a radius equal to the width of a tile."},"clusterMaxZoom":{"type":"number","doc":"Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered)."},"clusterProperties":{"type":"*","doc":"An object defining custom properties on the generated clusters if clustering is enabled, aggregating values from clustered points. Has the form `{\\"property_name\\": [operator, map_expression]}`. `operator` is any expression function that accepts at least 2 operands (e.g. `\\"+\\"` or `\\"max\\"`) — it accumulates the property value from clusters/points the cluster contains; `map_expression` produces the value of a single point.\\n\\nExample: `{\\"sum\\": [\\"+\\", [\\"get\\", \\"scalerank\\"]]}`.\\n\\nFor more advanced use cases, in place of `operator`, you can use a custom reduce expression that references a special `[\\"accumulated\\"]` value, e.g.:\\n`{\\"sum\\": [[\\"+\\", [\\"accumulated\\"], [\\"get\\", \\"sum\\"]], [\\"get\\", \\"scalerank\\"]]}`"},"lineMetrics":{"type":"boolean","default":false,"doc":"Whether to calculate line distance metrics. This is required for line layers that specify `line-gradient` values."},"generateId":{"type":"boolean","default":false,"doc":"Whether to generate ids for the geojson features. When enabled, the `feature.id` property will be auto assigned based on its index in the `features` array, over-writing any previous values."}},"source_video":{"type":{"required":true,"type":"enum","values":{"video":{"doc":"A video data source."}},"doc":"The data type of the video source."},"urls":{"required":true,"type":"array","value":"string","doc":"URLs to video content in order of preferred format."},"coordinates":{"required":true,"doc":"Corners of video specified in longitude, latitude pairs.","type":"array","length":4,"value":{"type":"array","length":2,"value":"number","doc":"A single longitude, latitude pair."}}},"source_image":{"type":{"required":true,"type":"enum","values":{"image":{"doc":"An image data source."}},"doc":"The data type of the image source."},"url":{"required":true,"type":"string","doc":"URL that points to an image."},"coordinates":{"required":true,"doc":"Corners of image specified in longitude, latitude pairs.","type":"array","length":4,"value":{"type":"array","length":2,"value":"number","doc":"A single longitude, latitude pair."}}},"layer":{"id":{"type":"string","doc":"Unique layer name.","required":true},"type":{"type":"enum","values":{"fill":{"doc":"A filled polygon with an optional stroked border.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}}},"line":{"doc":"A stroked line.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}}},"symbol":{"doc":"An icon or a text label.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}}},"circle":{"doc":"A filled circle.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}}},"heatmap":{"doc":"A heatmap.","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"fill-extrusion":{"doc":"An extruded (3D) polygon.","sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}}},"raster":{"doc":"Raster map textures such as satellite imagery.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}}},"hillshade":{"doc":"Client-side hillshading visualization based on DEM data. Currently, the implementation only supports Mapbox Terrain RGB and Mapzen Terrarium tiles.","sdk-support":{"basic functionality":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"background":{"doc":"The background color or pattern of the map.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}}}},"doc":"Rendering type of this layer.","required":true},"metadata":{"type":"*","doc":"Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like \'mapbox:\'."},"source":{"type":"string","doc":"Name of a source description to be used for this layer. Required for all layer types except `background`."},"source-layer":{"type":"string","doc":"Layer to use from a vector tile source. Required for vector tile sources; prohibited for all other source types, including GeoJSON sources."},"minzoom":{"type":"number","minimum":0,"maximum":24,"doc":"The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden."},"maxzoom":{"type":"number","minimum":0,"maximum":24,"doc":"The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden."},"filter":{"type":"filter","doc":"A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The `feature-state` expression is not supported in filter expressions."},"layout":{"type":"layout","doc":"Layout properties for the layer."},"paint":{"type":"paint","doc":"Default paint properties for this layer."}},"layout":["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],"layout_background":{"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}},"property-type":"constant"}},"layout_fill":{"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}},"property-type":"constant"}},"layout_circle":{"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}},"property-type":"constant"}},"layout_heatmap":{"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}},"property-type":"constant"}},"layout_fill-extrusion":{"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"property-type":"constant"}},"layout_line":{"line-cap":{"type":"enum","values":{"butt":{"doc":"A cap with a squared-off end which is drawn to the exact endpoint of the line."},"round":{"doc":"A cap with a rounded end which is drawn beyond the endpoint of the line at a radius of one-half of the line\'s width and centered on the endpoint of the line."},"square":{"doc":"A cap with a squared-off end which is drawn beyond the endpoint of the line at a distance of one-half of the line\'s width."}},"default":"butt","doc":"The display of line endings.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"line-join":{"type":"enum","values":{"bevel":{"doc":"A join with a squared-off end which is drawn beyond the endpoint of the line at a distance of one-half of the line\'s width."},"round":{"doc":"A join with a rounded end which is drawn beyond the endpoint of the line at a radius of one-half of the line\'s width and centered on the endpoint of the line."},"miter":{"doc":"A join with a sharp, angled corner which is drawn with the outer sides beyond the endpoint of the path until they meet."}},"default":"miter","doc":"The display of lines when joining.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.40.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{"type":"number","default":2,"doc":"Used to automatically convert miter joins to bevel joins for sharp angles.","requires":[{"line-join":"miter"}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"line-round-limit":{"type":"number","default":1.05,"doc":"Used to automatically convert round joins to miter joins for shallow angles.","requires":[{"line-join":"round"}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"property-type":"constant"}},"layout_symbol":{"symbol-placement":{"type":"enum","values":{"point":{"doc":"The label is placed at the point where the geometry is located."},"line":{"doc":"The label is placed along the line of the geometry. Can only be used on `LineString` and `Polygon` geometries."},"line-center":{"doc":"The label is placed at the center of the line of the geometry. Can only be used on `LineString` and `Polygon` geometries. Note that a single feature in a vector tile may contain multiple line geometries."}},"default":"point","doc":"Label placement relative to its geometry.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"`line-center` value":{"js":"0.47.0","android":"6.4.0","ios":"4.3.0","macos":"0.10.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"symbol-spacing":{"type":"number","default":250,"minimum":1,"units":"pixels","doc":"Distance between two symbol anchors.","requires":[{"symbol-placement":"line"}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{"type":"boolean","default":false,"doc":"If true, the symbols will not cross tile edges to avoid mutual collisions. Recommended in layers that don\'t have enough padding in the vector tile to prevent collisions, or if it is a point symbol layer placed after a line symbol layer.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{"type":"number","doc":"Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key when they overlap. Features with a lower sort key will have priority over other features when doing placement.","sdk-support":{"js":"0.53.0"},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{"type":"enum","values":{"auto":{"doc":"If `symbol-sort-key` is set, sort based on that. Otherwise sort symbols by their y-position relative to the viewport."},"viewport-y":{"doc":"Symbols will be sorted by their y-position relative to the viewport."},"source":{"doc":"Symbols will be rendered in the same order as the source data with no sorting applied."}},"default":"auto","doc":"Controls the order in which overlapping symbols in the same layer are rendered","sdk-support":{"basic functionality":{"js":"0.49.0","android":"6.6.0","ios":"4.5.0","macos":"0.12.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{"type":"boolean","default":false,"doc":"If true, the icon will be visible even if it collides with other previously drawn symbols.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{"type":"boolean","default":false,"doc":"If true, other symbols can be visible even if they collide with the icon.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-optional":{"type":"boolean","default":false,"doc":"If true, text will display without their corresponding icons when the icon collides with other symbols and the text does not.","requires":["icon-image","text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{"type":"enum","values":{"map":{"doc":"When `symbol-placement` is set to `point`, aligns icons east-west. When `symbol-placement` is set to `line` or `line-center`, aligns icon x-axes with the line."},"viewport":{"doc":"Produces icons whose x-axes are aligned with the x-axis of the viewport, regardless of the value of `symbol-placement`."},"auto":{"doc":"When `symbol-placement` is set to `point`, this is equivalent to `viewport`. When `symbol-placement` is set to `line` or `line-center`, this is equivalent to `map`."}},"default":"auto","doc":"In combination with `symbol-placement`, determines the rotation behavior of icons.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"`auto` value":{"js":"0.25.0","android":"4.2.0","ios":"3.4.0","macos":"0.3.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-size":{"type":"number","default":1,"minimum":0,"units":"factor of the original icon size","doc":"Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by `icon-size`. 1 is the original size; 3 triples the size of the image.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.35.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{"type":"enum","values":{"none":{"doc":"The icon is displayed at its intrinsic aspect ratio."},"width":{"doc":"The icon is scaled in the x-dimension to fit the width of the text."},"height":{"doc":"The icon is scaled in the y-dimension to fit the height of the text."},"both":{"doc":"The icon is scaled in both x- and y-dimensions."}},"default":"none","doc":"Scales the icon to fit around the associated text.","requires":["icon-image","text-field"],"sdk-support":{"basic functionality":{"js":"0.21.0","android":"4.2.0","ios":"3.4.0","macos":"0.2.1"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{"type":"array","value":"number","length":4,"default":[0,0,0,0],"units":"pixels","doc":"Size of the additional area added to dimensions determined by `icon-text-fit`, in clockwise order: top, right, bottom, left.","requires":["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],"sdk-support":{"basic functionality":{"js":"0.21.0","android":"4.2.0","ios":"3.4.0","macos":"0.2.1"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"icon-image":{"type":"string","doc":"Name of image in sprite to use for drawing an image background.","tokens":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.35.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{"type":"number","default":0,"period":360,"units":"degrees","doc":"Rotates the icon clockwise.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.21.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{"type":"number","default":2,"minimum":0,"units":"pixels","doc":"Size of the additional area around the icon bounding box used for detecting symbol collisions.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{"type":"boolean","default":false,"doc":"If true, the icon may be flipped to prevent it from being rendered upside-down.","requires":["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"icon-offset":{"type":"array","value":"number","length":2,"default":[0,0],"doc":"Offset distance of icon from its anchor. Positive values indicate right and down, while negative values indicate left and up. Each component is multiplied by the value of `icon-size` to obtain the final offset in pixels. When combined with `icon-rotate` the offset will be as if the rotated direction was up.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{"type":"enum","values":{"center":{"doc":"The center of the icon is placed closest to the anchor."},"left":{"doc":"The left side of the icon is placed closest to the anchor."},"right":{"doc":"The right side of the icon is placed closest to the anchor."},"top":{"doc":"The top of the icon is placed closest to the anchor."},"bottom":{"doc":"The bottom of the icon is placed closest to the anchor."},"top-left":{"doc":"The top left corner of the icon is placed closest to the anchor."},"top-right":{"doc":"The top right corner of the icon is placed closest to the anchor."},"bottom-left":{"doc":"The bottom left corner of the icon is placed closest to the anchor."},"bottom-right":{"doc":"The bottom right corner of the icon is placed closest to the anchor."}},"default":"center","doc":"Part of the icon placed closest to the anchor.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.40.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"},"data-driven styling":{"js":"0.40.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{"type":"enum","values":{"map":{"doc":"The icon is aligned to the plane of the map."},"viewport":{"doc":"The icon is aligned to the plane of the viewport."},"auto":{"doc":"Automatically matches the value of `icon-rotation-alignment`."}},"default":"auto","doc":"Orientation of icon when map is pitched.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.39.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{"type":"enum","values":{"map":{"doc":"The text is aligned to the plane of the map."},"viewport":{"doc":"The text is aligned to the plane of the viewport."},"auto":{"doc":"Automatically matches the value of `text-rotation-alignment`."}},"default":"auto","doc":"Orientation of text when map is pitched.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.21.0","android":"4.2.0","ios":"3.4.0","macos":"0.2.1"},"`auto` value":{"js":"0.25.0","android":"4.2.0","ios":"3.4.0","macos":"0.3.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{"type":"enum","values":{"map":{"doc":"When `symbol-placement` is set to `point`, aligns text east-west. When `symbol-placement` is set to `line` or `line-center`, aligns text x-axes with the line."},"viewport":{"doc":"Produces glyphs whose x-axes are aligned with the x-axis of the viewport, regardless of the value of `symbol-placement`."},"auto":{"doc":"When `symbol-placement` is set to `point`, this is equivalent to `viewport`. When `symbol-placement` is set to `line` or `line-center`, this is equivalent to `map`."}},"default":"auto","doc":"In combination with `symbol-placement`, determines the rotation behavior of the individual glyphs forming the text.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"`auto` value":{"js":"0.25.0","android":"4.2.0","ios":"3.4.0","macos":"0.3.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-field":{"type":"formatted","default":"","tokens":true,"doc":"Value to use for a text label. If a plain `string` is provided, it will be treated as a `formatted` with default/inherited formatting options.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-font":{"type":"array","value":"string","default":["Open Sans Regular","Arial Unicode MS Regular"],"doc":"Font stack to use for displaying text.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-size":{"type":"number","default":16,"minimum":0,"units":"pixels","doc":"Font size.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.35.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{"type":"number","default":10,"minimum":0,"units":"ems","doc":"The maximum line width for text wrapping.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.40.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{"type":"number","default":1.2,"units":"ems","doc":"Text leading value for multi-line text.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{"type":"number","default":0,"units":"ems","doc":"Text tracking amount.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.40.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-justify":{"type":"enum","values":{"auto":{"doc":"The text is aligned towards the anchor position."},"left":{"doc":"The text is aligned to the left."},"center":{"doc":"The text is centered."},"right":{"doc":"The text is aligned to the right."}},"default":"center","doc":"Text justification options.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.39.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"},"auto":{"js":"0.54.0","android":"7.4.0","ios":"4.10.0","macos":"0.14.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{"type":"number","units":"ems","default":0,"doc":"Radial offset of text, in the direction of the symbol\'s anchor. Useful in combination with `text-variable-anchor`, which doesn\'t support the two-dimensional `text-offset`.","sdk-support":{"basic functionality":{"js":"0.54.0","android":"7.4.0","ios":"4.10.0","macos":"0.14.0"},"data-driven styling":{"js":"0.54.0","android":"7.4.0","ios":"4.10.0","macos":"0.14.0"}},"requires":[{"!":"text-offset"}],"property-type":"data-driven","expression":{"interpolated":true,"parameters":["zoom","feature"]}},"text-variable-anchor":{"type":"array","value":"enum","values":{"center":{"doc":"The center of the text is placed closest to the anchor."},"left":{"doc":"The left side of the text is placed closest to the anchor."},"right":{"doc":"The right side of the text is placed closest to the anchor."},"top":{"doc":"The top of the text is placed closest to the anchor."},"bottom":{"doc":"The bottom of the text is placed closest to the anchor."},"top-left":{"doc":"The top left corner of the text is placed closest to the anchor."},"top-right":{"doc":"The top right corner of the text is placed closest to the anchor."},"bottom-left":{"doc":"The bottom left corner of the text is placed closest to the anchor."},"bottom-right":{"doc":"The bottom right corner of the text is placed closest to the anchor."}},"requires":[{"!":"text-anchor"},{"!":"text-offset"},{"symbol-placement":["point"]}],"doc":"To increase the chance of placing high-priority labels on the map, you can provide an array of `text-anchor` locations: the render will attempt to place the label at each location, in order, before moving onto the next label. Use `text-justify: auto` to choose justification based on anchor position. To apply an offset, use the `text-radial-offset` instead of the two-dimensional `text-offset`.","sdk-support":{"basic functionality":{"js":"0.54.0","android":"7.4.0","ios":"4.10.0","macos":"0.14.0"},"data-driven styling":{"js":"Not yet supported","android":"Not yet supported","ios":"Not yet supported","macos":"Not yet supported"}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-anchor":{"type":"enum","requires":["text-field"],"values":{"center":{"doc":"The center of the text is placed closest to the anchor."},"left":{"doc":"The left side of the text is placed closest to the anchor."},"right":{"doc":"The right side of the text is placed closest to the anchor."},"top":{"doc":"The top of the text is placed closest to the anchor."},"bottom":{"doc":"The bottom of the text is placed closest to the anchor."},"top-left":{"doc":"The top left corner of the text is placed closest to the anchor."},"top-right":{"doc":"The top right corner of the text is placed closest to the anchor."},"bottom-left":{"doc":"The bottom left corner of the text is placed closest to the anchor."},"bottom-right":{"doc":"The bottom right corner of the text is placed closest to the anchor."}},"default":"center","doc":"Part of the text placed closest to the anchor.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.39.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{"type":"number","default":45,"units":"degrees","doc":"Maximum angle change between adjacent characters.","requires":["text-field",{"symbol-placement":["line","line-center"]}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"text-rotate":{"type":"number","default":0,"period":360,"units":"degrees","doc":"Rotates the text clockwise.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.35.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-padding":{"type":"number","default":2,"minimum":0,"units":"pixels","doc":"Size of the additional area around the text bounding box used for detecting symbol collisions.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"text-keep-upright":{"type":"boolean","default":true,"doc":"If true, the text may be flipped vertically to prevent it from being rendered upside-down.","requires":["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-transform":{"type":"enum","values":{"none":{"doc":"The text is not altered."},"uppercase":{"doc":"Forces all letters to be displayed in uppercase."},"lowercase":{"doc":"Forces all letters to be displayed in lowercase."}},"default":"none","doc":"Specifies how to capitalize text, similar to the CSS `text-transform` property.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-offset":{"type":"array","doc":"Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up.","value":"number","units":"ems","length":2,"default":[0,0],"requires":["text-field",{"!":"text-radial-offset"}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.35.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{"type":"boolean","default":false,"doc":"If true, the text will be visible even if it collides with other previously drawn symbols.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{"type":"boolean","default":false,"doc":"If true, other symbols can be visible even if they collide with the text.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-optional":{"type":"boolean","default":false,"doc":"If true, icons will display without their corresponding text when the text collides with other symbols and the icon does not.","requires":["text-field","icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"property-type":"constant"}},"layout_raster":{"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"property-type":"constant"}},"layout_hillshade":{"visibility":{"type":"enum","values":{"visible":{"doc":"The layer is shown."},"none":{"doc":"The layer is not shown."}},"default":"visible","doc":"Whether this layer is displayed.","sdk-support":{"basic functionality":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"property-type":"constant"}},"filter":{"type":"array","value":"*","doc":"A filter selects specific features from a layer."},"filter_operator":{"type":"enum","values":{"==":{"doc":"`[\\"==\\", key, value]` equality: `feature[key] = value`"},"!=":{"doc":"`[\\"!=\\", key, value]` inequality: `feature[key] ≠ value`"},">":{"doc":"`[\\">\\", key, value]` greater than: `feature[key] > value`"},">=":{"doc":"`[\\">=\\", key, value]` greater than or equal: `feature[key] ≥ value`"},"<":{"doc":"`[\\"<\\", key, value]` less than: `feature[key] < value`"},"<=":{"doc":"`[\\"<=\\", key, value]` less than or equal: `feature[key] ≤ value`"},"in":{"doc":"`[\\"in\\", key, v0, ..., vn]` set inclusion: `feature[key] ∈ {v0, ..., vn}`"},"!in":{"doc":"`[\\"!in\\", key, v0, ..., vn]` set exclusion: `feature[key] ∉ {v0, ..., vn}`"},"all":{"doc":"`[\\"all\\", f0, ..., fn]` logical `AND`: `f0 ∧ ... ∧ fn`"},"any":{"doc":"`[\\"any\\", f0, ..., fn]` logical `OR`: `f0 ∨ ... ∨ fn`"},"none":{"doc":"`[\\"none\\", f0, ..., fn]` logical `NOR`: `¬f0 ∧ ... ∧ ¬fn`"},"has":{"doc":"`[\\"has\\", key]` `feature[key]` exists"},"!has":{"doc":"`[\\"!has\\", key]` `feature[key]` does not exist"}},"doc":"The filter operator."},"geometry_type":{"type":"enum","values":{"Point":{"doc":"Filter to point geometries."},"LineString":{"doc":"Filter to line geometries."},"Polygon":{"doc":"Filter to polygon geometries."}},"doc":"The geometry type for the filter to select."},"function":{"expression":{"type":"expression","doc":"An expression."},"stops":{"type":"array","doc":"An array of stops.","value":"function_stop"},"base":{"type":"number","default":1,"minimum":0,"doc":"The exponential base of the interpolation curve. It controls the rate at which the result increases. Higher values make the result increase more towards the high end of the range. With `1` the stops are interpolated linearly."},"property":{"type":"string","doc":"The name of a feature property to use as the function input.","default":"$zoom"},"type":{"type":"enum","values":{"identity":{"doc":"Return the input value as the output value."},"exponential":{"doc":"Generate an output by interpolating between stops just less than and just greater than the function input."},"interval":{"doc":"Return the output value of the stop just less than the function input."},"categorical":{"doc":"Return the output value of the stop equal to the function input."}},"doc":"The interpolation strategy to use in function evaluation.","default":"exponential"},"colorSpace":{"type":"enum","values":{"rgb":{"doc":"Use the RGB color space to interpolate color values"},"lab":{"doc":"Use the LAB color space to interpolate color values."},"hcl":{"doc":"Use the HCL color space to interpolate color values, interpolating the Hue, Chroma, and Luminance channels individually."}},"doc":"The color space in which colors interpolated. Interpolating colors in perceptual color spaces like LAB and HCL tend to produce color ramps that look more consistent and produce colors that can be differentiated more easily than those interpolated in RGB space.","default":"rgb"},"default":{"type":"*","required":false,"doc":"A value to serve as a fallback function result when a value isn\'t otherwise available. It is used in the following circumstances:\\n* In categorical functions, when the feature value does not match any of the stop domain values.\\n* In property and zoom-and-property functions, when a feature does not contain a value for the specified property.\\n* In identity functions, when the feature value is not valid for the style property (for example, if the function is being used for a `circle-color` property but the feature property value is not a string or not a valid color).\\n* In interval or exponential property and zoom-and-property functions, when the feature value is not numeric.\\nIf no default is provided, the style property\'s default is used in these circumstances."}},"function_stop":{"type":"array","minimum":0,"maximum":22,"value":["number","color"],"length":2,"doc":"Zoom level and value pair."},"expression":{"type":"array","value":"*","minimum":1,"doc":"An expression defines a function that can be used for data-driven style properties or feature filters."},"expression_name":{"doc":"","type":"enum","values":{"let":{"doc":"Binds expressions to named variables, which can then be referenced in the result expression using [\\"var\\", \\"variable_name\\"].","group":"Variable binding","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"var":{"doc":"References variable bound using \\"let\\".","group":"Variable binding","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"literal":{"doc":"Provides a literal array or object value.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"array":{"doc":"Asserts that the input is an array (optionally with a specific item type and length).  If, when the input expression is evaluated, it is not of the asserted type, then this assertion will cause the whole expression to be aborted.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"at":{"doc":"Retrieves an item from an array.","group":"Lookup","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"case":{"doc":"Selects the first output whose corresponding test condition evaluates to true, or the fallback value otherwise.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"match":{"doc":"Selects the output whose label value matches the input value, or the fallback value if no match is found. The input can be any expression (e.g. `[\\"get\\", \\"building_type\\"]`). Each label must be either:\\n * a single literal value; or\\n * an array of literal values, whose values must be all strings or all numbers (e.g. `[100, 101]` or `[\\"c\\", \\"b\\"]`). The input matches if any of the values in the array matches, similar to the deprecated `\\"in\\"` operator.\\n\\nEach label must be unique. If the input type does not match the type of the labels, the result will be the fallback value.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"coalesce":{"doc":"Evaluates each expression in turn until the first non-null value is obtained, and returns that value.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"step":{"doc":"Produces discrete, stepped results by evaluating a piecewise-constant function defined by pairs of input and output values (\\"stops\\"). The `input` may be any numeric expression (e.g., `[\\"get\\", \\"population\\"]`). Stop inputs must be numeric literals in strictly ascending order. Returns the output value of the stop just less than the input, or the first input if the input is less than the first stop.","group":"Ramps, scales, curves","sdk-support":{"basic functionality":{"js":"0.42.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"interpolate":{"doc":"Produces continuous, smooth results by interpolating between pairs of input and output values (\\"stops\\"). The `input` may be any numeric expression (e.g., `[\\"get\\", \\"population\\"]`). Stop inputs must be numeric literals in strictly ascending order. The output type must be `number`, `array<number>`, or `color`.\\n\\nInterpolation types:\\n- `[\\"linear\\"]`: interpolates linearly between the pair of stops just less than and just greater than the input.\\n- `[\\"exponential\\", base]`: interpolates exponentially between the stops just less than and just greater than the input. `base` controls the rate at which the output increases: higher values make the output increase more towards the high end of the range. With values close to 1 the output increases linearly.\\n- `[\\"cubic-bezier\\", x1, y1, x2, y2]`: interpolates using the cubic bezier curve defined by the given control points.","group":"Ramps, scales, curves","sdk-support":{"basic functionality":{"js":"0.42.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"interpolate-hcl":{"doc":"Produces continuous, smooth results by interpolating between pairs of input and output values (\\"stops\\"). Works like `interpolate`, but the output type must be `color`, and the interpolation is performed in the Hue-Chroma-Luminance color space.","group":"Ramps, scales, curves","sdk-support":{"basic functionality":{"js":"0.49.0"}}},"interpolate-lab":{"doc":"Produces continuous, smooth results by interpolating between pairs of input and output values (\\"stops\\"). Works like `interpolate`, but the output type must be `color`, and the interpolation is performed in the CIELAB color space.","group":"Ramps, scales, curves","sdk-support":{"basic functionality":{"js":"0.49.0"}}},"ln2":{"doc":"Returns mathematical constant ln(2).","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"pi":{"doc":"Returns the mathematical constant pi.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"e":{"doc":"Returns the mathematical constant e.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"typeof":{"doc":"Returns a string describing the type of the given value.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"string":{"doc":"Asserts that the input value is a string. If multiple values are provided, each one is evaluated in order until a string is obtained. If none of the inputs are strings, the expression is an error.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"number":{"doc":"Asserts that the input value is a number. If multiple values are provided, each one is evaluated in order until a number is obtained. If none of the inputs are numbers, the expression is an error.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"boolean":{"doc":"Asserts that the input value is a boolean. If multiple values are provided, each one is evaluated in order until a boolean is obtained. If none of the inputs are booleans, the expression is an error.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"object":{"doc":"Asserts that the input value is an object. If multiple values are provided, each one is evaluated in order until an object is obtained. If none of the inputs are objects, the expression is an error.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"collator":{"doc":"Returns a `collator` for use in locale-dependent comparison operations. The `case-sensitive` and `diacritic-sensitive` options default to `false`. The `locale` argument specifies the IETF language tag of the locale to use. If none is provided, the default locale is used. If the requested locale is not available, the `collator` will use a system-defined fallback locale. Use `resolved-locale` to test the results of locale fallback behavior.","group":"Types","sdk-support":{"basic functionality":{"js":"0.45.0","android":"6.5.0","ios":"4.2.0","macos":"0.9.0"}}},"format":{"doc":"Returns `formatted` text containing annotations for use in mixed-format `text-field` entries. If set, the `text-font` argument overrides the font specified by the root layout properties. If set, the `font-scale` argument specifies a scaling factor relative to the `text-size` specified in the root layout properties.","group":"Types","sdk-support":{"basic functionality":{"js":"0.48.0","android":"6.7.0","ios":"4.6.0","macos":"0.12.0"}}},"number-format":{"doc":"Converts the input number into a string representation using the providing formatting rules. If set, the `locale` argument specifies the locale to use, as a BCP 47 language tag. If set, the `currency` argument specifies an ISO 4217 code to use for currency-style formatting. If set, the `min-fraction-digits` and `max-fraction-digits` arguments specify the minimum and maximum number of fractional digits to include.","group":"Types","sdk-support":{"basic functionality":{"js":"0.54.0"}}},"to-string":{"doc":"Converts the input value to a string. If the input is `null`, the result is `\\"\\"`. If the input is a boolean, the result is `\\"true\\"` or `\\"false\\"`. If the input is a number, it is converted to a string as specified by the [\\"NumberToString\\" algorithm](https://tc39.github.io/ecma262/#sec-tostring-applied-to-the-number-type) of the ECMAScript Language Specification. If the input is a color, it is converted to a string of the form `\\"rgba(r,g,b,a)\\"`, where `r`, `g`, and `b` are numerals ranging from 0 to 255, and `a` ranges from 0 to 1. Otherwise, the input is converted to a string in the format specified by the [`JSON.stringify`](https://tc39.github.io/ecma262/#sec-json.stringify) function of the ECMAScript Language Specification.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"to-number":{"doc":"Converts the input value to a number, if possible. If the input is `null` or `false`, the result is 0. If the input is `true`, the result is 1. If the input is a string, it is converted to a number as specified by the [\\"ToNumber Applied to the String Type\\" algorithm](https://tc39.github.io/ecma262/#sec-tonumber-applied-to-the-string-type) of the ECMAScript Language Specification. If multiple values are provided, each one is evaluated in order until the first successful conversion is obtained. If none of the inputs can be converted, the expression is an error.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"to-boolean":{"doc":"Converts the input value to a boolean. The result is `false` when then input is an empty string, 0, `false`, `null`, or `NaN`; otherwise it is `true`.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"to-rgba":{"doc":"Returns a four-element array containing the input color\'s red, green, blue, and alpha components, in that order.","group":"Color","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"to-color":{"doc":"Converts the input value to a color. If multiple values are provided, each one is evaluated in order until the first successful conversion is obtained. If none of the inputs can be converted, the expression is an error.","group":"Types","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"rgb":{"doc":"Creates a color value from red, green, and blue components, which must range between 0 and 255, and an alpha component of 1. If any component is out of range, the expression is an error.","group":"Color","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"rgba":{"doc":"Creates a color value from red, green, blue components, which must range between 0 and 255, and an alpha component which must range between 0 and 1. If any component is out of range, the expression is an error.","group":"Color","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"get":{"doc":"Retrieves a property value from the current feature\'s properties, or from another object if a second argument is provided. Returns null if the requested property is missing.","group":"Lookup","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"has":{"doc":"Tests for the presence of an property value in the current feature\'s properties, or from another object if a second argument is provided.","group":"Lookup","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"length":{"doc":"Gets the length of an array or string.","group":"Lookup","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"properties":{"doc":"Gets the feature properties object.  Note that in some cases, it may be more efficient to use [\\"get\\", \\"property_name\\"] directly.","group":"Feature data","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"feature-state":{"doc":"Retrieves a property value from the current feature\'s state. Returns null if the requested property is not present on the feature\'s state. A feature\'s state is not part of the GeoJSON or vector tile data, and must be set programmatically on each feature. Note that [\\"feature-state\\"] can only be used with paint properties that support data-driven styling.","group":"Feature data","sdk-support":{"basic functionality":{"js":"0.46.0"}}},"geometry-type":{"doc":"Gets the feature\'s geometry type: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon.","group":"Feature data","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"id":{"doc":"Gets the feature\'s id, if it has one.","group":"Feature data","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"zoom":{"doc":"Gets the current zoom level.  Note that in style layout and paint properties, [\\"zoom\\"] may only appear as the input to a top-level \\"step\\" or \\"interpolate\\" expression.","group":"Zoom","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"heatmap-density":{"doc":"Gets the kernel density estimation of a pixel in a heatmap layer, which is a relative measure of how many data points are crowded around a particular pixel. Can only be used in the `heatmap-color` property.","group":"Heatmap","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"line-progress":{"doc":"Gets the progress along a gradient line. Can only be used in the `line-gradient` property.","group":"Feature data","sdk-support":{"basic functionality":{"js":"0.45.0","android":"6.5.0","ios":"4.6.0","macos":"0.12.0"}}},"accumulated":{"doc":"Gets the value of a cluster property accumulated so far. Can only be used in the `clusterProperties` option of a clustered GeoJSON source.","group":"Feature data","sdk-support":{"basic functionality":{"js":"0.53.0"}}},"+":{"doc":"Returns the sum of the inputs.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"*":{"doc":"Returns the product of the inputs.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"-":{"doc":"For two inputs, returns the result of subtracting the second input from the first. For a single input, returns the result of subtracting it from 0.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"/":{"doc":"Returns the result of floating point division of the first input by the second.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"%":{"doc":"Returns the remainder after integer division of the first input by the second.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"^":{"doc":"Returns the result of raising the first input to the power specified by the second.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"sqrt":{"doc":"Returns the square root of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.42.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"log10":{"doc":"Returns the base-ten logarithm of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"ln":{"doc":"Returns the natural logarithm of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"log2":{"doc":"Returns the base-two logarithm of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"sin":{"doc":"Returns the sine of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"cos":{"doc":"Returns the cosine of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"tan":{"doc":"Returns the tangent of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"asin":{"doc":"Returns the arcsine of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"acos":{"doc":"Returns the arccosine of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"atan":{"doc":"Returns the arctangent of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"min":{"doc":"Returns the minimum value of the inputs.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"max":{"doc":"Returns the maximum value of the inputs.","group":"Math","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"round":{"doc":"Rounds the input to the nearest integer. Halfway values are rounded away from zero. For example, `[\\"round\\", -1.5]` evaluates to -2.","group":"Math","sdk-support":{"basic functionality":{"js":"0.45.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"abs":{"doc":"Returns the absolute value of the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.45.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"ceil":{"doc":"Returns the smallest integer that is greater than or equal to the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.45.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"floor":{"doc":"Returns the largest integer that is less than or equal to the input.","group":"Math","sdk-support":{"basic functionality":{"js":"0.45.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"==":{"doc":"Returns `true` if the input values are equal, `false` otherwise. The comparison is strictly typed: values of different runtime types are always considered unequal. Cases where the types are known to be different at parse time are considered invalid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"collator":{"js":"0.45.0","android":"6.5.0","ios":"4.2.0","macos":"0.9.0"}}},"!=":{"doc":"Returns `true` if the input values are not equal, `false` otherwise. The comparison is strictly typed: values of different runtime types are always considered unequal. Cases where the types are known to be different at parse time are considered invalid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"collator":{"js":"0.45.0","android":"6.5.0","ios":"4.2.0","macos":"0.9.0"}}},">":{"doc":"Returns `true` if the first input is strictly greater than the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"collator":{"js":"0.45.0","android":"6.5.0","ios":"4.2.0","macos":"0.9.0"}}},"<":{"doc":"Returns `true` if the first input is strictly less than the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"collator":{"js":"0.45.0","android":"6.5.0","ios":"4.2.0","macos":"0.9.0"}}},">=":{"doc":"Returns `true` if the first input is greater than or equal to the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"collator":{"js":"0.45.0","android":"6.5.0","ios":"4.2.0","macos":"0.9.0"}}},"<=":{"doc":"Returns `true` if the first input is less than or equal to the second, `false` otherwise. The arguments are required to be either both strings or both numbers; if during evaluation they are not, expression evaluation produces an error. Cases where this constraint is known not to hold at parse time are considered in valid and will produce a parse error. Accepts an optional `collator` argument to control locale-dependent string comparisons.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"collator":{"js":"0.45.0","android":"6.5.0","ios":"4.2.0","macos":"0.9.0"}}},"all":{"doc":"Returns `true` if all the inputs are `true`, `false` otherwise. The inputs are evaluated in order, and evaluation is short-circuiting: once an input expression evaluates to `false`, the result is `false` and no further input expressions are evaluated.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"any":{"doc":"Returns `true` if any of the inputs are `true`, `false` otherwise. The inputs are evaluated in order, and evaluation is short-circuiting: once an input expression evaluates to `true`, the result is `true` and no further input expressions are evaluated.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"!":{"doc":"Logical negation. Returns `true` if the input is `false`, and `false` if the input is `true`.","group":"Decision","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"is-supported-script":{"doc":"Returns `true` if the input string is expected to render legibly. Returns `false` if the input string contains sections that cannot be rendered without potential loss of meaning (e.g. Indic scripts that require complex text shaping, or right-to-left scripts if the the `mapbox-gl-rtl-text` plugin is not in use in Mapbox GL JS).","group":"String"},"upcase":{"doc":"Returns the input string converted to uppercase. Follows the Unicode Default Case Conversion algorithm and the locale-insensitive case mappings in the Unicode Character Database.","group":"String","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"downcase":{"doc":"Returns the input string converted to lowercase. Follows the Unicode Default Case Conversion algorithm and the locale-insensitive case mappings in the Unicode Character Database.","group":"String","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"concat":{"doc":"Returns a `string` consisting of the concatenation of the inputs. Each input is converted to a string as if by `to-string`.","group":"String","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}}},"resolved-locale":{"doc":"Returns the IETF language tag of the locale being used by the provided `collator`. This can be used to determine the default system locale, or to determine if a requested locale was successfully loaded.","group":"String","sdk-support":{"basic functionality":{"js":"0.45.0","android":"6.5.0","ios":"4.2.0","macos":"0.9.0"}}}}},"light":{"anchor":{"type":"enum","default":"viewport","values":{"map":{"doc":"The position of the light source is aligned to the rotation of the map."},"viewport":{"doc":"The position of the light source is aligned to the rotation of the viewport."}},"property-type":"data-constant","transition":false,"expression":{"interpolated":false,"parameters":["zoom"]},"doc":"Whether extruded geometries are lit relative to the map or viewport.","example":"map","sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}}},"position":{"type":"array","default":[1.15,210,30],"length":3,"value":"number","property-type":"data-constant","transition":true,"expression":{"interpolated":true,"parameters":["zoom"]},"doc":"Position of the light source relative to lit (extruded) geometries, in [r radial coordinate, a azimuthal angle, p polar angle] where r indicates the distance from the center of the base of an object to its light, a indicates the position of the light relative to 0° (0° when `light.anchor` is set to `viewport` corresponds to the top of the viewport, or 0° when `light.anchor` is set to `map` corresponds to due north, and degrees proceed clockwise), and p indicates the height of the light (from 0°, directly above, to 180°, directly below).","example":[1.5,90,80],"sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}}},"color":{"type":"color","property-type":"data-constant","default":"#ffffff","expression":{"interpolated":true,"parameters":["zoom"]},"transition":true,"doc":"Color tint for lighting extruded geometries.","sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}}},"intensity":{"type":"number","property-type":"data-constant","default":0.5,"minimum":0,"maximum":1,"expression":{"interpolated":true,"parameters":["zoom"]},"transition":true,"doc":"Intensity of lighting (on a scale from 0 to 1). Higher numbers will present as more extreme contrast.","sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}}}},"paint":["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],"paint_fill":{"fill-antialias":{"type":"boolean","default":true,"doc":"Whether or not the fill should be antialiased.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"fill-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"doc":"The opacity of the entire fill layer. In contrast to the `fill-color`, this value will also affect the 1px stroke around the fill, if the stroke is used.","transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.21.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{"type":"color","default":"#000000","doc":"The color of the filled part of this layer. This color can be specified as `rgba` with an alpha component and the color\'s opacity will not affect the opacity of the 1px stroke, if it is used.","transition":true,"requires":[{"!":"fill-pattern"}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.19.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{"type":"color","doc":"The outline color of the fill. Matches the value of `fill-color` if unspecified.","transition":true,"requires":[{"!":"fill-pattern"},{"fill-antialias":true}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.19.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","doc":"The geometry\'s offset. Values are [x, y] where negatives indicate left and up, respectively.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{"type":"enum","values":{"map":{"doc":"The fill is translated relative to the map."},"viewport":{"doc":"The fill is translated relative to the viewport."}},"doc":"Controls the frame of reference for `fill-translate`.","default":"map","requires":["fill-translate"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"fill-pattern":{"type":"string","transition":true,"doc":"Name of image in sprite to use for drawing image fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.49.0","android":"6.5.0","macos":"0.11.0","ios":"4.4.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"doc":"The opacity of the entire fill extrusion layer. This is rendered on a per-layer, not per-feature, basis, and data-driven styling is not available.","transition":true,"sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{"type":"color","default":"#000000","doc":"The base color of the extruded fill. The extrusion\'s surfaces will be shaded differently based on this color in combination with the root `light` settings. If this color is specified as `rgba` with an alpha component, the alpha component will be ignored; use `fill-extrusion-opacity` to set layer opacity.","transition":true,"requires":[{"!":"fill-extrusion-pattern"}],"sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"},"data-driven styling":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","doc":"The geometry\'s offset. Values are [x, y] where negatives indicate left and up (on the flat plane), respectively.","sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{"type":"enum","values":{"map":{"doc":"The fill extrusion is translated relative to the map."},"viewport":{"doc":"The fill extrusion is translated relative to the viewport."}},"doc":"Controls the frame of reference for `fill-extrusion-translate`.","default":"map","requires":["fill-extrusion-translate"],"sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{"type":"string","transition":true,"doc":"Name of image in sprite to use for drawing images on extruded fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.","sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"},"data-driven styling":{"js":"0.49.0","android":"6.5.0","macos":"0.11.0","ios":"4.4.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{"type":"number","default":0,"minimum":0,"units":"meters","doc":"The height with which to extrude this layer.","transition":true,"sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"},"data-driven styling":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{"type":"number","default":0,"minimum":0,"units":"meters","doc":"The height with which to extrude the base of this layer. Must be less than or equal to `fill-extrusion-height`.","transition":true,"requires":["fill-extrusion-height"],"sdk-support":{"basic functionality":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"},"data-driven styling":{"js":"0.27.0","android":"5.1.0","ios":"3.6.0","macos":"0.5.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{"type":"boolean","default":true,"doc":"Whether to apply a vertical gradient to the sides of a fill-extrusion layer. If true, sides will be shaded slightly darker farther down.","transition":false,"sdk-support":{"basic functionality":{"js":"0.50.0","ios":"4.7.0","macos":"0.13.0"}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_line":{"line-opacity":{"type":"number","doc":"The opacity at which the line will be drawn.","default":1,"minimum":0,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{"type":"color","doc":"The color with which the line will be drawn.","default":"#000000","transition":true,"requires":[{"!":"line-pattern"}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.23.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","doc":"The geometry\'s offset. Values are [x, y] where negatives indicate left and up, respectively.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{"type":"enum","values":{"map":{"doc":"The line is translated relative to the map."},"viewport":{"doc":"The line is translated relative to the viewport."}},"doc":"Controls the frame of reference for `line-translate`.","default":"map","requires":["line-translate"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"line-width":{"type":"number","default":1,"minimum":0,"transition":true,"units":"pixels","doc":"Stroke thickness.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.39.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{"type":"number","default":0,"minimum":0,"doc":"Draws a line casing outside of a line\'s actual path. Value indicates the width of the inner gap.","transition":true,"units":"pixels","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{"type":"number","default":0,"doc":"The line\'s offset. For linear features, a positive value offsets the line to the right, relative to the direction of the line, and a negative value to the left. For polygon features, a positive value results in an inset, and a negative value results in an outset.","transition":true,"units":"pixels","sdk-support":{"basic functionality":{"js":"0.12.1","android":"3.0.0","ios":"3.1.0","macos":"0.1.0"},"data-driven styling":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","doc":"Blur applied to the line, in pixels.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{"type":"array","value":"number","doc":"Specifies the lengths of the alternating dashes and gaps that form the dash pattern. The lengths are later scaled by the line width. To convert a dash length to pixels, multiply the length by the current line width. Note that GeoJSON sources with `lineMetrics: true` specified won\'t render dashed lines to the expected scale. Also note that zoom-dependent expressions will be evaluated only at integer zoom levels.","minimum":0,"transition":true,"units":"line widths","requires":[{"!":"line-pattern"}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"cross-faded"},"line-pattern":{"type":"string","transition":true,"doc":"Name of image in sprite to use for drawing image lines. For seamless patterns, image width must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.49.0","android":"6.5.0","macos":"0.11.0","ios":"4.4.0"}},"expression":{"interpolated":false,"parameters":["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{"type":"color","doc":"Defines a gradient with which to color a line feature. Can only be used with GeoJSON sources that specify `\\"lineMetrics\\": true`.","transition":false,"requires":[{"!":"line-dasharray"},{"!":"line-pattern"},{"source":"geojson","has":{"lineMetrics":true}}],"sdk-support":{"basic functionality":{"js":"0.45.0","android":"6.5.0","ios":"4.4.0","macos":"0.11.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["line-progress"]},"property-type":"color-ramp"}},"paint_circle":{"circle-radius":{"type":"number","default":5,"minimum":0,"transition":true,"units":"pixels","doc":"Circle radius.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.18.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{"type":"color","default":"#000000","doc":"The fill color of the circle.","transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.18.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{"type":"number","default":0,"doc":"Amount to blur the circle. 1 blurs the circle such that only the centerpoint is full opacity.","transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.20.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{"type":"number","doc":"The opacity at which the circle will be drawn.","default":1,"minimum":0,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.20.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","doc":"The geometry\'s offset. Values are [x, y] where negatives indicate left and up, respectively.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{"type":"enum","values":{"map":{"doc":"The circle is translated relative to the map."},"viewport":{"doc":"The circle is translated relative to the viewport."}},"doc":"Controls the frame of reference for `circle-translate`.","default":"map","requires":["circle-translate"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{"type":"enum","values":{"map":{"doc":"Circles are scaled according to their apparent distance to the camera."},"viewport":{"doc":"Circles are not scaled."}},"default":"map","doc":"Controls the scaling behavior of the circle when the map is pitched.","sdk-support":{"basic functionality":{"js":"0.21.0","android":"4.2.0","ios":"3.4.0","macos":"0.2.1"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{"type":"enum","values":{"map":{"doc":"The circle is aligned to the plane of the map."},"viewport":{"doc":"The circle is aligned to the plane of the viewport."}},"default":"viewport","doc":"Orientation of circle when map is pitched.","sdk-support":{"basic functionality":{"js":"0.39.0","android":"5.2.0","ios":"3.7.0","macos":"0.6.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","doc":"The width of the circle\'s stroke. Strokes are placed outside of the `circle-radius`.","sdk-support":{"basic functionality":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"},"data-driven styling":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{"type":"color","default":"#000000","doc":"The stroke color of the circle.","transition":true,"sdk-support":{"basic functionality":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"},"data-driven styling":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{"type":"number","doc":"The opacity of the circle\'s stroke.","default":1,"minimum":0,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"},"data-driven styling":{"js":"0.29.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"}},"paint_heatmap":{"heatmap-radius":{"type":"number","default":30,"minimum":1,"transition":true,"units":"pixels","doc":"Radius of influence of one heatmap point in pixels. Increasing the value makes the heatmap smoother, but less detailed.","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{"type":"number","default":1,"minimum":0,"transition":false,"doc":"A measure of how much an individual point contributes to the heatmap. A value of 10 would be equivalent to having 10 points of weight 1 in the same spot. Especially useful when combined with clustering.","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{"type":"number","default":1,"minimum":0,"transition":true,"doc":"Similar to `heatmap-weight` but controls the intensity of the heatmap globally. Primarily used for adjusting the heatmap based on zoom level.","sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"heatmap-color":{"type":"color","default":["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",0.1,"royalblue",0.3,"cyan",0.5,"lime",0.7,"yellow",1,"red"],"doc":"Defines the color of each pixel based on its density value in a heatmap.  Should be an expression that uses `[\\"heatmap-density\\"]` as input.","transition":false,"sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{"type":"number","doc":"The global opacity at which the heatmap layer will be drawn.","default":1,"minimum":0,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.41.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_symbol":{"icon-opacity":{"doc":"The opacity at which the icon will be drawn.","type":"number","default":1,"minimum":0,"maximum":1,"transition":true,"requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{"type":"color","default":"#000000","transition":true,"doc":"The color of the icon. This can only be used with sdf icons.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{"type":"color","default":"rgba(0, 0, 0, 0)","transition":true,"doc":"The color of the icon\'s halo. Icon halos can only be used with SDF icons.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","doc":"Distance of halo to the icon outline.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","doc":"Fade out the halo towards the outside.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","doc":"Distance that the icon\'s anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.","requires":["icon-image"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{"type":"enum","values":{"map":{"doc":"Icons are translated relative to the map."},"viewport":{"doc":"Icons are translated relative to the viewport."}},"doc":"Controls the frame of reference for `icon-translate`.","default":"map","requires":["icon-image","icon-translate"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"text-opacity":{"type":"number","doc":"The opacity at which the text will be drawn.","default":1,"minimum":0,"maximum":1,"transition":true,"requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{"type":"color","doc":"The color with which the text will be drawn.","default":"#000000","transition":true,"requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{"type":"color","default":"rgba(0, 0, 0, 0)","transition":true,"doc":"The color of the text\'s halo, which helps it stand out from backgrounds.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","doc":"Distance of halo to the font outline. Max text halo width is 1/4 of the font-size.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{"type":"number","default":0,"minimum":0,"transition":true,"units":"pixels","doc":"The halo\'s fadeout distance towards the outside.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{"js":"0.33.0","android":"5.0.0","ios":"3.5.0","macos":"0.4.0"}},"expression":{"interpolated":true,"parameters":["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{"type":"array","value":"number","length":2,"default":[0,0],"transition":true,"units":"pixels","doc":"Distance that the text\'s anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.","requires":["text-field"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{"type":"enum","values":{"map":{"doc":"The text is translated relative to the map."},"viewport":{"doc":"The text is translated relative to the viewport."}},"doc":"Controls the frame of reference for `text-translate`.","default":"map","requires":["text-field","text-translate"],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_raster":{"raster-opacity":{"type":"number","doc":"The opacity at which the image will be drawn.","default":1,"minimum":0,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{"type":"number","default":0,"period":360,"transition":true,"units":"degrees","doc":"Rotates hues around the color wheel.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{"type":"number","doc":"Increase or reduce the brightness of the image. The value is the minimum brightness.","default":0,"minimum":0,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{"type":"number","doc":"Increase or reduce the brightness of the image. The value is the maximum brightness.","default":1,"minimum":0,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-saturation":{"type":"number","doc":"Increase or reduce the saturation of the image.","default":0,"minimum":-1,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-contrast":{"type":"number","doc":"Increase or reduce the contrast of the image.","default":0,"minimum":-1,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"raster-resampling":{"type":"enum","doc":"The resampling/interpolation method to use for overscaling, also known as texture magnification filter","values":{"linear":{"doc":"(Bi)linear filtering interpolates pixel values using the weighted average of the four closest original source pixels creating a smooth but blurry look when overscaled"},"nearest":{"doc":"Nearest neighbor filtering interpolates pixel values using the nearest original source pixel creating a sharp but pixelated look when overscaled"}},"default":"linear","sdk-support":{"basic functionality":{"js":"0.47.0","android":"6.3.0","ios":"4.2.0","macos":"0.9.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{"type":"number","default":300,"minimum":0,"transition":false,"units":"milliseconds","doc":"Fade duration when a new tile is added.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_hillshade":{"hillshade-illumination-direction":{"type":"number","default":335,"minimum":0,"maximum":359,"doc":"The direction of the light source used to generate the hillshading with 0 as the top of the viewport if `hillshade-illumination-anchor` is set to `viewport` and due north if `hillshade-illumination-anchor` is set to `map`.","transition":false,"sdk-support":{"basic functionality":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{"type":"enum","values":{"map":{"doc":"The hillshade illumination is relative to the north direction."},"viewport":{"doc":"The hillshade illumination is relative to the top of the viewport."}},"default":"viewport","doc":"Direction of light source when map is rotated.","sdk-support":{"basic functionality":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{"type":"number","doc":"Intensity of the hillshade","default":0.5,"minimum":0,"maximum":1,"transition":true,"sdk-support":{"basic functionality":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{"type":"color","default":"#000000","doc":"The shading color of areas that face away from the light source.","transition":true,"sdk-support":{"basic functionality":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{"type":"color","default":"#FFFFFF","doc":"The shading color of areas that faces towards the light source.","transition":true,"sdk-support":{"basic functionality":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{"type":"color","default":"#000000","doc":"The shading color used to accentuate rugged terrain like sharp cliffs and gorges.","transition":true,"sdk-support":{"basic functionality":{"js":"0.43.0","android":"6.0.0","ios":"4.0.0","macos":"0.7.0"},"data-driven styling":{}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"paint_background":{"background-color":{"type":"color","default":"#000000","doc":"The color with which the background will be drawn.","transition":true,"requires":[{"!":"background-pattern"}],"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"},"background-pattern":{"type":"string","transition":true,"doc":"Name of image in sprite to use for drawing an image background. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoom-dependent expressions will be evaluated only at integer zoom levels.","sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}},"expression":{"interpolated":false,"parameters":["zoom"]},"property-type":"cross-faded"},"background-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"doc":"The opacity at which the background will be drawn.","transition":true,"sdk-support":{"basic functionality":{"js":"0.10.0","android":"2.0.1","ios":"2.0.0","macos":"0.1.0"}},"expression":{"interpolated":true,"parameters":["zoom"]},"property-type":"data-constant"}},"transition":{"duration":{"type":"number","default":300,"minimum":0,"units":"milliseconds","doc":"Time allotted for transitions to complete."},"delay":{"type":"number","default":0,"minimum":0,"units":"milliseconds","doc":"Length of time before a transition begins."}},"property-type":{"data-driven":{"type":"property-type","doc":"Property is interpolable and can be represented using a property expression."},"cross-faded":{"type":"property-type","doc":"Property is non-interpolable; rather, its values will be cross-faded to smoothly transition between integer zooms."},"cross-faded-data-driven":{"type":"property-type","doc":"Property is non-interpolable; rather, its values will be cross-faded to smoothly transition between integer zooms. It can be represented using a property expression."},"color-ramp":{"type":"property-type","doc":"Property should be specified using a color ramp from which the output color can be sampled based on a property calculation."},"data-constant":{"type":"property-type","doc":"Property is interpolable but cannot be represented using a property expression."},"constant":{"type":"property-type","doc":"Property is constant across all zoom levels and property values."}}}')
    }, function (e, t) {
        (function () {
            var t;
            e.exports = {
                icon: "icons/google.svg",
                name: "google",
                title: "Google Fonts",
                link: "google.com/fonts",
                getNames: function () {
                    return t
                },
                getLink: function (e) {
                    return "https://fonts.google.com/specimen/" + e.replace(/( )/g, "+")
                },
                normalizeName: function (e) {
                    return e
                }
            }, t = ["ABeeZee", "Abel", "Abril Fatface", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Aguafina Script", "Akronim", "Aladin", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Alex Brush", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Allan", "Allerta", "Allerta Stencil", "Allura", "Almendra", "Almendra Display", "Almendra SC", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiri", "Amita", "Anaheim", "Andada", "Andika", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo Black", "Archivo Narrow", "Arimo", "Arizonia", "Armata", "Artifika", "Arvo", "Arya", "Asap", "Asar", "Asset", "Astloch", "Asul", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "Bad Script", "Balthazar", "Bangers", "Basic", "Battambang", "Baumans", "Bayon", "Belgrano", "Belleza", "BenchNine", "Bentham", "Berkshire Swash", "Bevan", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "Biryani", "Bitter", "Black Ops One", "Bokor", "Bonbon", "Boogaloo", "Bowlby One", "Bowlby One SC", "Brawler", "Bree Serif", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Butcherman", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "Caesar Dressing", "Cagliostro", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Capriola", "Cardo", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Changa One", "Chango", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chivo", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Coda", "Coda Caption", "Codystar", "Combo", "Comfortaa", "Coming Soon", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Courgette", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Crete Round", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cutive", "Cutive Mono", "Damion", "Dancing Script", "Dangrek", "Dawning of a New Day", "Days One", "Dekko", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Didact Gothic", "Diplomata", "Diplomata SC", "Domine", "Donegal One", "Doppio One", "Dorsa", "Dosis", "Dr Sugiyama", "Droid Sans", "Droid Sans Mono", "Droid Serif", "Duru Sans", "Dynalight", "EB Garamond", "Eagle Lake", "Eater", "Economica", "Eczar", "Ek Mukta", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Engagement", "Englebert", "Enriqueta", "Erica One", "Esteban", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Fanwood Text", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Federant", "Federo", "Felipa", "Fenix", "Finger Paint", "Fira Mono", "Fira Sans", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fondamento", "Fontdiner Swanky", "Forum", "Francois One", "Freckle Face", "Fredericka the Great", "Fredoka One", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "GFS Didot", "GFS Neohellenic", "Gabriela", "Gafata", "Galdeano", "Galindo", "Gentium Basic", "Gentium Book Basic", "Geo", "Geostar", "Geostar Fill", "Germania One", "Gidugu", "Gilda Display", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloria Hallelujah", "Goblin One", "Gochi Hand", "Gorditas", "Goudy Bookletter 1911", "Graduate", "Grand Hotel", "Gravitas One", "Great Vibes", "Griffy", "Gruppo", "Gudea", "Gurajada", "Habibi", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handlee", "Hanuman", "Happy Monkey", "Headland One", "Henny Penny", "Herr Von Muellerhoff", "Hind", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Iceberg", "Iceland", "Imprima", "Inconsolata", "Inder", "Indie Flower", "Inika", "Inknut Antiqua", "Irish Grover", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "Jim Nightshade", "Jockey One", "Jolly Lodger", "Josefin Sans", "Josefin Slab", "Joti One", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "Kadwa", "Kalam", "Kameron", "Kantumruy", "Karla", "Karma", "Kaushan Script", "Kavoon", "Kdam Thmor", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "Kite One", "Knewave", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Kurale", "La Belle Aurore", "Laila", "Lakki Reddy", "Lancelot", "Lateef", "Lato", "League Script", "Leckerli One", "Ledger", "Lekton", "Lemon", "Libre Baskerville", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Lobster", "Lobster Two", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Lora", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lusitana", "Lustria", "Macondo", "Macondo Swash Caps", "Magra", "Maiden Orange", "Mako", "Mallanna", "Mandali", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Marko One", "Marmelad", "Martel", "Martel Sans", "Marvel", "Mate", "Mate SC", "Maven Pro", "McLaren", "Meddon", "MedievalSharp", "Medula One", "Megrim", "Meie Script", "Merienda", "Merienda One", "Merriweather", "Merriweather Sans", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Miniver", "Miss Fajardose", "Modak", "Modern Antiqua", "Molengo", "Molle", "Monda", "Monofett", "Monoton", "Monsieur La Doulaise", "Montaga", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Muli", "Mystery Quest", "NTR", "Neucha", "Neuton", "New Rocker", "News Cycle", "Niconne", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Nothing You Could Do", "Noticia Text", "Noto Sans", "Noto Serif", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "Numans", "Nunito", "Odor Mean Chey", "Offside", "Old Standard TT", "Oldenburg", "Oleo Script", "Oleo Script Swash Caps", "Open Sans", "Open Sans Condensed", "Oranienbaum", "Orbitron", "Oregano", "Orienta", "Original Surfer", "Oswald", "Over the Rainbow", "Overlock", "Overlock SC", "Ovo", "Oxygen", "Oxygen Mono", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Pacifico", "Palanquin", "Palanquin Dark", "Paprika", "Parisienne", "Passero One", "Passion One", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Patua One", "Paytone One", "Peddana", "Peralta", "Permanent Marker", "Petit Formal Script", "Petrona", "Philosopher", "Piedra", "Pinyon Script", "Pirata One", "Plaster", "Play", "Playball", "Playfair Display", "Playfair Display SC", "Podkova", "Poiret One", "Poller One", "Poly", "Pompiere", "Pontano Sans", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Pragati Narrow", "Prata", "Preahvihear", "Press Start 2P", "Princess Sofia", "Prociono", "Prosto One", "Puritan", "Purple Purse", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Racing Sans One", "Radley", "Rajdhani", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Ranchers", "Rancho", "Ranga", "Rationale", "Ravi Prakash", "Redressed", "Reenie Beanie", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Roboto", "Roboto Condensed", "Roboto Mono", "Roboto Slab", "Rochester", "Rock Salt", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "Rozha One", "Rubik", "Rubik Mono One", "Rubik One", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Rye", "Sacramento", "Sahitya", "Sail", "Salsa", "Sanchez", "Sancreek", "Sansita One", "Sarala", "Sarina", "Sarpanch", "Satisfy", "Scada", "Scheherazade", "Schoolbell", "Seaweed Script", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shojumaru", "Short Stack", "Siemreap", "Sigmar One", "Signika", "Signika Negative", "Simonetta", "Sintony", "Sirin Stencil", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Smokum", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Sonsie One", "Sorts Mill Goudy", "Source Code Pro", "Source Sans Pro", "Source Serif Pro", "Special Elite", "Spicy Rice", "Spinnaker", "Spirax", "Squada One", "Sree Krushnadevaraya", "Stalemate", "Stalinist One", "Stardos Stencil", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Sue Ellen Francisco", "Sumana", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Tangerine", "Taprom", "Tauri", "Teko", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Text Me One", "The Girl Next Door", "Tienne", "Tillana", "Timmana", "Tinos", "Titan One", "Titillium Web", "Trade Winds", "Trocchi", "Trochut", "Trykker", "Tulpen One", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ultra", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "VT323", "Vampiro One", "Varela", "Varela Round", "Vast Shadow", "Vesper Libre", "Vibur", "Vidaloka", "Viga", "Voces", "Volkhov", "Vollkorn", "Voltaire", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Wellfleet", "Wendy One", "Wire One", "Work Sans", "Yanone Kaffeesatz", "Yantramanav", "Yellowtail", "Yeseva One", "Yesteryear", "Zeyada"]
        }).call(this)
    }, function (e, t) {
        e.exports = ol.tilegrid
    }, function (e, t) {
        e.exports = ol.View
    }, function (e, t) {
        e.exports = ol.format.GeoJSON
    }, function (e, t) {
        e.exports = ol.format.MVT
    }, function (e, t) {
        e.exports = ol.layer.Tile
    }, function (e, t, o) {
        "use strict";
        (function (e) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var r = o(26), i = o(27), n = o(28);

            function a() {
                return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
            }

            function l(e, t, o) {
                if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, o);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return c(this, e)
                }
                return u(this, e, t, o)
            }

            function u(e, t, o, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, o, r) {
                    if (t.byteLength, o < 0 || t.byteLength < o) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < o + (r || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === o && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, o) : new Uint8Array(t, o, r);
                    l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = d(e, t);
                    return e
                }(e, t, o, r) : "string" == typeof t ? function (e, t, o) {
                    "string" == typeof o && "" !== o || (o = "utf8");
                    if (!l.isEncoding(o)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | f(t, o), i = (e = s(e, r)).write(t, o);
                    i !== r && (e = e.slice(0, i));
                    return e
                }(e, t, o) : function (e, t) {
                    if (l.isBuffer(t)) {
                        var o = 0 | h(t.length);
                        return 0 === (e = s(e, o)).length ? e : (t.copy(e, 0, 0, o), e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : d(e, t);
                        if ("Buffer" === t.type && n(t.data)) return d(e, t.data)
                    }
                    var r;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function p(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function c(e, t) {
                if (p(t), e = s(e, t < 0 ? 0 : 0 | h(t)), !l.TYPED_ARRAY_SUPPORT) for (var o = 0; o < t; ++o) e[o] = 0;
                return e
            }

            function d(e, t) {
                var o = t.length < 0 ? 0 : 0 | h(t.length);
                e = s(e, o);
                for (var r = 0; r < o; r += 1) e[r] = 255 & t[r];
                return e
            }

            function h(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }

            function f(e, t) {
                if (l.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var o = e.length;
                if (0 === o) return 0;
                for (var r = !1; ;) switch (t) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return o;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return B(e).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * o;
                    case"hex":
                        return o >>> 1;
                    case"base64":
                        return U(e).length;
                    default:
                        if (r) return B(e).length;
                        t = ("" + t).toLowerCase(), r = !0
                }
            }

            function y(e, t, o) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === o || o > this.length) && (o = this.length), o <= 0) return "";
                if ((o >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ;) switch (e) {
                    case"hex":
                        return C(this, t, o);
                    case"utf8":
                    case"utf-8":
                        return z(this, t, o);
                    case"ascii":
                        return A(this, t, o);
                    case"latin1":
                    case"binary":
                        return O(this, t, o);
                    case"base64":
                        return T(this, t, o);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return R(this, t, o);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function m(e, t, o) {
                var r = e[t];
                e[t] = e[o], e[o] = r
            }

            function g(e, t, o, r, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof o ? (r = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), o = +o, isNaN(o) && (o = i ? 0 : e.length - 1), o < 0 && (o = e.length + o), o >= e.length) {
                    if (i) return -1;
                    o = e.length - 1
                } else if (o < 0) {
                    if (!i) return -1;
                    o = 0
                }
                if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, o, r, i);
                if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, o) : Uint8Array.prototype.lastIndexOf.call(e, t, o) : v(e, [t], o, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function v(e, t, o, r, i) {
                var n, a = 1, s = e.length, l = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, l /= 2, o /= 2
                }

                function u(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }

                if (i) {
                    var p = -1;
                    for (n = o; n < s; n++) if (u(e, n) === u(t, -1 === p ? 0 : n - p)) {
                        if (-1 === p && (p = n), n - p + 1 === l) return p * a
                    } else -1 !== p && (n -= n - p), p = -1
                } else for (o + l > s && (o = s - l), n = o; n >= 0; n--) {
                    for (var c = !0, d = 0; d < l; d++) if (u(e, n + d) !== u(t, d)) {
                        c = !1;
                        break
                    }
                    if (c) return n
                }
                return -1
            }

            function b(e, t, o, r) {
                o = Number(o) || 0;
                var i = e.length - o;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var n = t.length;
                if (n % 2 != 0) throw new TypeError("Invalid hex string");
                r > n / 2 && (r = n / 2);
                for (var a = 0; a < r; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    e[o + a] = s
                }
                return a
            }

            function x(e, t, o, r) {
                return G(B(t, e.length - o), e, o, r)
            }

            function w(e, t, o, r) {
                return G(function (e) {
                    for (var t = [], o = 0; o < e.length; ++o) t.push(255 & e.charCodeAt(o));
                    return t
                }(t), e, o, r)
            }

            function k(e, t, o, r) {
                return w(e, t, o, r)
            }

            function j(e, t, o, r) {
                return G(U(t), e, o, r)
            }

            function S(e, t, o, r) {
                return G(function (e, t) {
                    for (var o, r, i, n = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) o = e.charCodeAt(a), r = o >> 8, i = o % 256, n.push(i), n.push(r);
                    return n
                }(t, e.length - o), e, o, r)
            }

            function T(e, t, o) {
                return 0 === t && o === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, o))
            }

            function z(e, t, o) {
                o = Math.min(e.length, o);
                for (var r = [], i = t; i < o;) {
                    var n, a, s, l, u = e[i], p = null, c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (i + c <= o) switch (c) {
                        case 1:
                            u < 128 && (p = u);
                            break;
                        case 2:
                            128 == (192 & (n = e[i + 1])) && (l = (31 & u) << 6 | 63 & n) > 127 && (p = l);
                            break;
                        case 3:
                            n = e[i + 1], a = e[i + 2], 128 == (192 & n) && 128 == (192 & a) && (l = (15 & u) << 12 | (63 & n) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (p = l);
                            break;
                        case 4:
                            n = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & n) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & n) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (p = l)
                    }
                    null === p ? (p = 65533, c = 1) : p > 65535 && (p -= 65536, r.push(p >>> 10 & 1023 | 55296), p = 56320 | 1023 & p), r.push(p), i += c
                }
                return function (e) {
                    var t = e.length;
                    if (t <= _) return String.fromCharCode.apply(String, e);
                    var o = "", r = 0;
                    for (; r < t;) o += String.fromCharCode.apply(String, e.slice(r, r += _));
                    return o
                }(r)
            }

            t.Buffer = l, t.SlowBuffer = function (e) {
                +e != e && (e = 0);
                return l.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.kMaxLength = a(), l.poolSize = 8192, l._augment = function (e) {
                return e.__proto__ = l.prototype, e
            }, l.from = function (e, t, o) {
                return u(null, e, t, o)
            }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                value: null,
                configurable: !0
            })), l.alloc = function (e, t, o) {
                return function (e, t, o, r) {
                    return p(t), t <= 0 ? s(e, t) : void 0 !== o ? "string" == typeof r ? s(e, t).fill(o, r) : s(e, t).fill(o) : s(e, t)
                }(null, e, t, o)
            }, l.allocUnsafe = function (e) {
                return c(null, e)
            }, l.allocUnsafeSlow = function (e) {
                return c(null, e)
            }, l.isBuffer = function (e) {
                return !(null == e || !e._isBuffer)
            }, l.compare = function (e, t) {
                if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var o = e.length, r = t.length, i = 0, n = Math.min(o, r); i < n; ++i) if (e[i] !== t[i]) {
                    o = e[i], r = t[i];
                    break
                }
                return o < r ? -1 : r < o ? 1 : 0
            }, l.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, l.concat = function (e, t) {
                if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return l.alloc(0);
                var o;
                if (void 0 === t) for (t = 0, o = 0; o < e.length; ++o) t += e[o].length;
                var r = l.allocUnsafe(t), i = 0;
                for (o = 0; o < e.length; ++o) {
                    var a = e[o];
                    if (!l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(r, i), i += a.length
                }
                return r
            }, l.byteLength = f, l.prototype._isBuffer = !0, l.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) m(this, t, t + 1);
                return this
            }, l.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
                return this
            }, l.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
                return this
            }, l.prototype.toString = function () {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? z(this, 0, e) : y.apply(this, arguments)
            }, l.prototype.equals = function (e) {
                if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === l.compare(this, e)
            }, l.prototype.inspect = function () {
                var e = "", o = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, o).match(/.{2}/g).join(" "), this.length > o && (e += " ... ")), "<Buffer " + e + ">"
            }, l.prototype.compare = function (e, t, o, r, i) {
                if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === o && (o = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || o > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && t >= o) return 0;
                if (r >= i) return -1;
                if (t >= o) return 1;
                if (this === e) return 0;
                for (var n = (i >>>= 0) - (r >>>= 0), a = (o >>>= 0) - (t >>>= 0), s = Math.min(n, a), u = this.slice(r, i), p = e.slice(t, o), c = 0; c < s; ++c) if (u[c] !== p[c]) {
                    n = u[c], a = p[c];
                    break
                }
                return n < a ? -1 : a < n ? 1 : 0
            }, l.prototype.includes = function (e, t, o) {
                return -1 !== this.indexOf(e, t, o)
            }, l.prototype.indexOf = function (e, t, o) {
                return g(this, e, t, o, !0)
            }, l.prototype.lastIndexOf = function (e, t, o) {
                return g(this, e, t, o, !1)
            }, l.prototype.write = function (e, t, o, r) {
                if (void 0 === t) r = "utf8", o = this.length, t = 0; else if (void 0 === o && "string" == typeof t) r = t, o = this.length, t = 0; else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(o) ? (o |= 0, void 0 === r && (r = "utf8")) : (r = o, o = void 0)
                }
                var i = this.length - t;
                if ((void 0 === o || o > i) && (o = i), e.length > 0 && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var n = !1; ;) switch (r) {
                    case"hex":
                        return b(this, e, t, o);
                    case"utf8":
                    case"utf-8":
                        return x(this, e, t, o);
                    case"ascii":
                        return w(this, e, t, o);
                    case"latin1":
                    case"binary":
                        return k(this, e, t, o);
                    case"base64":
                        return j(this, e, t, o);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return S(this, e, t, o);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), n = !0
                }
            }, l.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var _ = 4096;

            function A(e, t, o) {
                var r = "";
                o = Math.min(e.length, o);
                for (var i = t; i < o; ++i) r += String.fromCharCode(127 & e[i]);
                return r
            }

            function O(e, t, o) {
                var r = "";
                o = Math.min(e.length, o);
                for (var i = t; i < o; ++i) r += String.fromCharCode(e[i]);
                return r
            }

            function C(e, t, o) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!o || o < 0 || o > r) && (o = r);
                for (var i = "", n = t; n < o; ++n) i += D(e[n]);
                return i
            }

            function R(e, t, o) {
                for (var r = e.slice(t, o), i = "", n = 0; n < r.length; n += 2) i += String.fromCharCode(r[n] + 256 * r[n + 1]);
                return i
            }

            function M(e, t, o) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > o) throw new RangeError("Trying to access beyond buffer length")
            }

            function E(e, t, o, r, i, n) {
                if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < n) throw new RangeError('"value" argument is out of bounds');
                if (o + r > e.length) throw new RangeError("Index out of range")
            }

            function I(e, t, o, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, n = Math.min(e.length - o, 2); i < n; ++i) e[o + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
            }

            function P(e, t, o, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, n = Math.min(e.length - o, 4); i < n; ++i) e[o + i] = t >>> 8 * (r ? i : 3 - i) & 255
            }

            function q(e, t, o, r, i, n) {
                if (o + r > e.length) throw new RangeError("Index out of range");
                if (o < 0) throw new RangeError("Index out of range")
            }

            function L(e, t, o, r, n) {
                return n || q(e, 0, o, 4), i.write(e, t, o, r, 23, 4), o + 4
            }

            function N(e, t, o, r, n) {
                return n || q(e, 0, o, 8), i.write(e, t, o, r, 52, 8), o + 8
            }

            l.prototype.slice = function (e, t) {
                var o, r = this.length;
                if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT) (o = this.subarray(e, t)).__proto__ = l.prototype; else {
                    var i = t - e;
                    o = new l(i, void 0);
                    for (var n = 0; n < i; ++n) o[n] = this[n + e]
                }
                return o
            }, l.prototype.readUIntLE = function (e, t, o) {
                e |= 0, t |= 0, o || M(e, t, this.length);
                for (var r = this[e], i = 1, n = 0; ++n < t && (i *= 256);) r += this[e + n] * i;
                return r
            }, l.prototype.readUIntBE = function (e, t, o) {
                e |= 0, t |= 0, o || M(e, t, this.length);
                for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                return r
            }, l.prototype.readUInt8 = function (e, t) {
                return t || M(e, 1, this.length), this[e]
            }, l.prototype.readUInt16LE = function (e, t) {
                return t || M(e, 2, this.length), this[e] | this[e + 1] << 8
            }, l.prototype.readUInt16BE = function (e, t) {
                return t || M(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, l.prototype.readUInt32LE = function (e, t) {
                return t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, l.prototype.readUInt32BE = function (e, t) {
                return t || M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, l.prototype.readIntLE = function (e, t, o) {
                e |= 0, t |= 0, o || M(e, t, this.length);
                for (var r = this[e], i = 1, n = 0; ++n < t && (i *= 256);) r += this[e + n] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
            }, l.prototype.readIntBE = function (e, t, o) {
                e |= 0, t |= 0, o || M(e, t, this.length);
                for (var r = t, i = 1, n = this[e + --r]; r > 0 && (i *= 256);) n += this[e + --r] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, l.prototype.readInt8 = function (e, t) {
                return t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, l.prototype.readInt16LE = function (e, t) {
                t || M(e, 2, this.length);
                var o = this[e] | this[e + 1] << 8;
                return 32768 & o ? 4294901760 | o : o
            }, l.prototype.readInt16BE = function (e, t) {
                t || M(e, 2, this.length);
                var o = this[e + 1] | this[e] << 8;
                return 32768 & o ? 4294901760 | o : o
            }, l.prototype.readInt32LE = function (e, t) {
                return t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, l.prototype.readInt32BE = function (e, t) {
                return t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, l.prototype.readFloatLE = function (e, t) {
                return t || M(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, l.prototype.readFloatBE = function (e, t) {
                return t || M(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, l.prototype.readDoubleLE = function (e, t) {
                return t || M(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, l.prototype.readDoubleBE = function (e, t) {
                return t || M(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, l.prototype.writeUIntLE = function (e, t, o, r) {
                (e = +e, t |= 0, o |= 0, r) || E(this, e, t, o, Math.pow(2, 8 * o) - 1, 0);
                var i = 1, n = 0;
                for (this[t] = 255 & e; ++n < o && (i *= 256);) this[t + n] = e / i & 255;
                return t + o
            }, l.prototype.writeUIntBE = function (e, t, o, r) {
                (e = +e, t |= 0, o |= 0, r) || E(this, e, t, o, Math.pow(2, 8 * o) - 1, 0);
                var i = o - 1, n = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (n *= 256);) this[t + i] = e / n & 255;
                return t + o
            }, l.prototype.writeUInt8 = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, l.prototype.writeUInt16LE = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2
            }, l.prototype.writeUInt16BE = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2
            }, l.prototype.writeUInt32LE = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : P(this, e, t, !0), t + 4
            }, l.prototype.writeUInt32BE = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4
            }, l.prototype.writeIntLE = function (e, t, o, r) {
                if (e = +e, t |= 0, !r) {
                    var i = Math.pow(2, 8 * o - 1);
                    E(this, e, t, o, i - 1, -i)
                }
                var n = 0, a = 1, s = 0;
                for (this[t] = 255 & e; ++n < o && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + n - 1] && (s = 1), this[t + n] = (e / a >> 0) - s & 255;
                return t + o
            }, l.prototype.writeIntBE = function (e, t, o, r) {
                if (e = +e, t |= 0, !r) {
                    var i = Math.pow(2, 8 * o - 1);
                    E(this, e, t, o, i - 1, -i)
                }
                var n = o - 1, a = 1, s = 0;
                for (this[t + n] = 255 & e; --n >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + n + 1] && (s = 1), this[t + n] = (e / a >> 0) - s & 255;
                return t + o
            }, l.prototype.writeInt8 = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, l.prototype.writeInt16LE = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2
            }, l.prototype.writeInt16BE = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2
            }, l.prototype.writeInt32LE = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : P(this, e, t, !0), t + 4
            }, l.prototype.writeInt32BE = function (e, t, o) {
                return e = +e, t |= 0, o || E(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : P(this, e, t, !1), t + 4
            }, l.prototype.writeFloatLE = function (e, t, o) {
                return L(this, e, t, !0, o)
            }, l.prototype.writeFloatBE = function (e, t, o) {
                return L(this, e, t, !1, o)
            }, l.prototype.writeDoubleLE = function (e, t, o) {
                return N(this, e, t, !0, o)
            }, l.prototype.writeDoubleBE = function (e, t, o) {
                return N(this, e, t, !1, o)
            }, l.prototype.copy = function (e, t, o, r) {
                if (o || (o = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < o && (r = o), r === o) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (o < 0 || o >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - o && (r = e.length - t + o);
                var i, n = r - o;
                if (this === e && o < t && t < r) for (i = n - 1; i >= 0; --i) e[i + t] = this[i + o]; else if (n < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (i = 0; i < n; ++i) e[i + t] = this[i + o]; else Uint8Array.prototype.set.call(e, this.subarray(o, o + n), t);
                return n
            }, l.prototype.fill = function (e, t, o, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t, t = 0, o = this.length) : "string" == typeof o && (r = o, o = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < o) throw new RangeError("Out of range index");
                if (o <= t) return this;
                var n;
                if (t >>>= 0, o = void 0 === o ? this.length : o >>> 0, e || (e = 0), "number" == typeof e) for (n = t; n < o; ++n) this[n] = e; else {
                    var a = l.isBuffer(e) ? e : B(new l(e, r).toString()), s = a.length;
                    for (n = 0; n < o - t; ++n) this[n + t] = a[n % s]
                }
                return this
            };
            var F = /[^+\/0-9A-Za-z-_]/g;

            function D(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function B(e, t) {
                var o;
                t = t || 1 / 0;
                for (var r = e.length, i = null, n = [], a = 0; a < r; ++a) {
                    if ((o = e.charCodeAt(a)) > 55295 && o < 57344) {
                        if (!i) {
                            if (o > 56319) {
                                (t -= 3) > -1 && n.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === r) {
                                (t -= 3) > -1 && n.push(239, 191, 189);
                                continue
                            }
                            i = o;
                            continue
                        }
                        if (o < 56320) {
                            (t -= 3) > -1 && n.push(239, 191, 189), i = o;
                            continue
                        }
                        o = 65536 + (i - 55296 << 10 | o - 56320)
                    } else i && (t -= 3) > -1 && n.push(239, 191, 189);
                    if (i = null, o < 128) {
                        if ((t -= 1) < 0) break;
                        n.push(o)
                    } else if (o < 2048) {
                        if ((t -= 2) < 0) break;
                        n.push(o >> 6 | 192, 63 & o | 128)
                    } else if (o < 65536) {
                        if ((t -= 3) < 0) break;
                        n.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
                    } else {
                        if (!(o < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        n.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
                    }
                }
                return n
            }

            function U(e) {
                return r.toByteArray(function (e) {
                    if ((e = function (e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(F, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function G(e, t, o, r) {
                for (var i = 0; i < r && !(i + o >= t.length || i >= e.length); ++i) t[i + o] = e[i];
                return i
            }
        }).call(this, o(15))
    }, function (e, t, o) {
        "use strict";
        t.byteLength = function (e) {
            var t = u(e), o = t[0], r = t[1];
            return 3 * (o + r) / 4 - r
        }, t.toByteArray = function (e) {
            for (var t, o = u(e), r = o[0], a = o[1], s = new n(function (e, t, o) {
                return 3 * (t + o) / 4 - o
            }(0, r, a)), l = 0, p = a > 0 ? r - 4 : r, c = 0; c < p; c += 4) t = i[e.charCodeAt(c)] << 18 | i[e.charCodeAt(c + 1)] << 12 | i[e.charCodeAt(c + 2)] << 6 | i[e.charCodeAt(c + 3)], s[l++] = t >> 16 & 255, s[l++] = t >> 8 & 255, s[l++] = 255 & t;
            2 === a && (t = i[e.charCodeAt(c)] << 2 | i[e.charCodeAt(c + 1)] >> 4, s[l++] = 255 & t);
            1 === a && (t = i[e.charCodeAt(c)] << 10 | i[e.charCodeAt(c + 1)] << 4 | i[e.charCodeAt(c + 2)] >> 2, s[l++] = t >> 8 & 255, s[l++] = 255 & t);
            return s
        }, t.fromByteArray = function (e) {
            for (var t, o = e.length, i = o % 3, n = [], a = 0, s = o - i; a < s; a += 16383) n.push(p(e, a, a + 16383 > s ? s : a + 16383));
            1 === i ? (t = e[o - 1], n.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[o - 2] << 8) + e[o - 1], n.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
            return n.join("")
        };
        for (var r = [], i = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s) r[s] = a[s], i[a.charCodeAt(s)] = s;

        function u(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var o = e.indexOf("=");
            return -1 === o && (o = t), [o, o === t ? 0 : 4 - o % 4]
        }

        function p(e, t, o) {
            for (var i, n, a = [], s = t; s < o; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(n = i) >> 18 & 63] + r[n >> 12 & 63] + r[n >> 6 & 63] + r[63 & n]);
            return a.join("")
        }

        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, function (e, t) {
        t.read = function (e, t, o, r, i) {
            var n, a, s = 8 * i - r - 1, l = (1 << s) - 1, u = l >> 1, p = -7, c = o ? i - 1 : 0, d = o ? -1 : 1,
                h = e[t + c];
            for (c += d, n = h & (1 << -p) - 1, h >>= -p, p += s; p > 0; n = 256 * n + e[t + c], c += d, p -= 8) ;
            for (a = n & (1 << -p) - 1, n >>= -p, p += r; p > 0; a = 256 * a + e[t + c], c += d, p -= 8) ;
            if (0 === n) n = 1 - u; else {
                if (n === l) return a ? NaN : 1 / 0 * (h ? -1 : 1);
                a += Math.pow(2, r), n -= u
            }
            return (h ? -1 : 1) * a * Math.pow(2, n - r)
        }, t.write = function (e, t, o, r, i, n) {
            var a, s, l, u = 8 * n - i - 1, p = (1 << u) - 1, c = p >> 1,
                d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = r ? 0 : n - 1, f = r ? 1 : -1,
                y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = p) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + c >= 1 ? d / l : d * Math.pow(2, 1 - c)) * l >= 2 && (a++, l /= 2), a + c >= p ? (s = 0, a = p) : a + c >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; e[o + h] = 255 & s, h += f, s /= 256, i -= 8) ;
            for (a = a << i | s, u += i; u > 0; e[o + h] = 255 & a, h += f, a /= 256, u -= 8) ;
            e[o + h - f] |= 128 * y
        }
    }, function (e, t) {
        var o = {}.toString;
        e.exports = Array.isArray || function (e) {
            return "[object Array]" == o.call(e)
        }
    }, function (e, t, o) {
        "use strict";
        o.r(t);
        var r = o(6), i = o.n(r), n = o(1), a = o.n(n), s = o(2), l = o.n(s), u = o(3), p = o.n(u), c = o(8),
            d = o.n(c);
        var h = 0;
        var f = "5.3.3", y = function (e) {
            function t(t) {
                var o = "Assertion failed. See https://openlayers.org/en/" + ("latest" === f ? f : "v" + f.split("-")[0]) + "/doc/errors/#" + t + " for details.";
                e.call(this, o), this.code = t, this.name = "AssertionError", this.message = o
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
        }(Error);

        function m(e, t) {
            if (!e) throw new y(t)
        }

        function g(e, t, o) {
            return Math.min(Math.max(e, t), o)
        }

        "cosh" in Math && Math.cosh;
        var v = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i, b = /^([a-z]*)$/i;

        function x(e) {
            return "string" == typeof e ? e : function (e) {
                var t = e[0];
                t != (0 | t) && (t = t + .5 | 0);
                var o = e[1];
                o != (0 | o) && (o = o + .5 | 0);
                var r = e[2];
                r != (0 | r) && (r = r + .5 | 0);
                var i = void 0 === e[3] ? 1 : e[3];
                return "rgba(" + t + "," + o + "," + r + "," + i + ")"
            }(e)
        }

        var w, k;
        w = {}, k = 0;

        function j(e) {
            return e[0] = g(e[0] + .5 | 0, 0, 255), e[1] = g(e[1] + .5 | 0, 0, 255), e[2] = g(e[2] + .5 | 0, 0, 255), e[3] = g(e[3], 0, 1), e
        }

        var S = function (e) {
            var t = e || {};
            this.color_ = void 0 !== t.color ? t.color : null, this.checksum_ = void 0
        };
        S.prototype.clone = function () {
            var e = this.getColor();
            return new S({color: Array.isArray(e) ? e.slice() : e || void 0})
        }, S.prototype.getColor = function () {
            return this.color_
        }, S.prototype.setColor = function (e) {
            this.color_ = e, this.checksum_ = void 0
        }, S.prototype.getChecksum = function () {
            if (void 0 === this.checksum_) {
                var e = this.color_;
                e ? Array.isArray(e) || "string" == typeof e ? this.checksum_ = "f" + x(e) : this.checksum_ = (t = this.color_).ol_uid || (t.ol_uid = String(++h)) : this.checksum_ = "f-"
            }
            var t;
            return this.checksum_
        };
        var T = S, z = "point", _ = function (e) {
            var t = e || {};
            this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.scale_ = t.scale, this.text_ = t.text, this.textAlign_ = t.textAlign, this.textBaseline_ = t.textBaseline, this.fill_ = void 0 !== t.fill ? t.fill : new T({color: "#333"}), this.maxAngle_ = void 0 !== t.maxAngle ? t.maxAngle : Math.PI / 4, this.placement_ = void 0 !== t.placement ? t.placement : z, this.overflow_ = !!t.overflow, this.stroke_ = void 0 !== t.stroke ? t.stroke : null, this.offsetX_ = void 0 !== t.offsetX ? t.offsetX : 0, this.offsetY_ = void 0 !== t.offsetY ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = void 0 === t.padding ? null : t.padding
        };
        _.prototype.clone = function () {
            return new _({
                font: this.getFont(),
                placement: this.getPlacement(),
                maxAngle: this.getMaxAngle(),
                overflow: this.getOverflow(),
                rotation: this.getRotation(),
                rotateWithView: this.getRotateWithView(),
                scale: this.getScale(),
                text: this.getText(),
                textAlign: this.getTextAlign(),
                textBaseline: this.getTextBaseline(),
                fill: this.getFill() ? this.getFill().clone() : void 0,
                stroke: this.getStroke() ? this.getStroke().clone() : void 0,
                offsetX: this.getOffsetX(),
                offsetY: this.getOffsetY(),
                backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
                backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0
            })
        }, _.prototype.getOverflow = function () {
            return this.overflow_
        }, _.prototype.getFont = function () {
            return this.font_
        }, _.prototype.getMaxAngle = function () {
            return this.maxAngle_
        }, _.prototype.getPlacement = function () {
            return this.placement_
        }, _.prototype.getOffsetX = function () {
            return this.offsetX_
        }, _.prototype.getOffsetY = function () {
            return this.offsetY_
        }, _.prototype.getFill = function () {
            return this.fill_
        }, _.prototype.getRotateWithView = function () {
            return this.rotateWithView_
        }, _.prototype.getRotation = function () {
            return this.rotation_
        }, _.prototype.getScale = function () {
            return this.scale_
        }, _.prototype.getStroke = function () {
            return this.stroke_
        }, _.prototype.getText = function () {
            return this.text_
        }, _.prototype.getTextAlign = function () {
            return this.textAlign_
        }, _.prototype.getTextBaseline = function () {
            return this.textBaseline_
        }, _.prototype.getBackgroundFill = function () {
            return this.backgroundFill_
        }, _.prototype.getBackgroundStroke = function () {
            return this.backgroundStroke_
        }, _.prototype.getPadding = function () {
            return this.padding_
        }, _.prototype.setOverflow = function (e) {
            this.overflow_ = e
        }, _.prototype.setFont = function (e) {
            this.font_ = e
        }, _.prototype.setMaxAngle = function (e) {
            this.maxAngle_ = e
        }, _.prototype.setOffsetX = function (e) {
            this.offsetX_ = e
        }, _.prototype.setOffsetY = function (e) {
            this.offsetY_ = e
        }, _.prototype.setPlacement = function (e) {
            this.placement_ = e
        }, _.prototype.setFill = function (e) {
            this.fill_ = e
        }, _.prototype.setRotation = function (e) {
            this.rotation_ = e
        }, _.prototype.setScale = function (e) {
            this.scale_ = e
        }, _.prototype.setStroke = function (e) {
            this.stroke_ = e
        }, _.prototype.setText = function (e) {
            this.text_ = e
        }, _.prototype.setTextAlign = function (e) {
            this.textAlign_ = e
        }, _.prototype.setTextBaseline = function (e) {
            this.textBaseline_ = e
        }, _.prototype.setBackgroundFill = function (e) {
            this.backgroundFill_ = e
        }, _.prototype.setBackgroundStroke = function (e) {
            this.backgroundStroke_ = e
        }, _.prototype.setPadding = function (e) {
            this.padding_ = e
        };
        var A = _, O = o(16), C = o.n(O), R = o(17), M = o.n(R),
            E = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];

        function I(e, t) {
            var o = {};
            for (var r in e) "ref" !== r && (o[r] = e[r]);
            return E.forEach(function (e) {
                e in t && (o[e] = t[e])
            }), o
        }

        var P = function (e) {
            e = e.slice();
            for (var t = Object.create(null), o = 0; o < e.length; o++) t[e[o].id] = e[o];
            for (var r = 0; r < e.length; r++) "ref" in e[r] && (e[r] = I(e[r], t[e[r].ref]));
            return e
        };
        var q = o(18), L = o(0);
        "function" == typeof Object.assign && Object.assign;

        function N(e) {
            for (var t in e) delete e[t]
        }

        function F(e, t, o, r) {
            for (var i, n = 0, a = e.length; n < a; ++n) if ((i = e[n]).listener === t && i.bindTo === o) return r && (i.deleteIndex = n), i
        }

        function D(e, t) {
            var o = B(e);
            return o ? o[t] : void 0
        }

        function B(e, t) {
            var o = e.ol_lm;
            return !o && t && (o = e.ol_lm = {}), o
        }

        function U(e, t) {
            var o = D(e, t);
            if (o) {
                for (var r = 0, i = o.length; r < i; ++r) e.removeEventListener(t, o[r].boundListener), N(o[r]);
                o.length = 0;
                var n = B(e);
                n && (delete n[t], 0 === Object.keys(n).length && function (e) {
                    delete e.ol_lm
                }(e))
            }
        }

        function G(e, t, o, r, i) {
            var n = B(e, !0), a = n[t];
            a || (a = n[t] = []);
            var s = F(a, o, r, !1);
            return s ? i || (s.callOnce = !1) : (s = {
                bindTo: r,
                callOnce: !!i,
                listener: o,
                target: e,
                type: t
            }, e.addEventListener(t, function (e) {
                var t = function (t) {
                    var o = e.listener, r = e.bindTo || e.target;
                    return e.callOnce && J(e), o.call(r, t)
                };
                return e.boundListener = t, t
            }(s)), a.push(s)), s
        }

        function J(e) {
            if (e && e.target) {
                e.target.removeEventListener(e.type, e.boundListener);
                var t = D(e.target, e.type);
                if (t) {
                    var o = "deleteIndex" in e ? e.deleteIndex : t.indexOf(e);
                    -1 !== o && t.splice(o, 1), 0 === t.length && U(e.target, e.type)
                }
                N(e)
            }
        }

        var W = "clear", $ = function () {
            var e, t = {};
            return function (o) {
                if (e || (e = document.createElement("div").style), !(o in t)) {
                    e.font = o;
                    var r = e.fontFamily;
                    if (e.font = "", !r) return null;
                    t[o] = r.split(/,\s?/)
                }
                return t[o]
            }
        }();
        var V = function () {
            this.disposed_ = !1
        };
        V.prototype.dispose = function () {
            this.disposed_ || (this.disposed_ = !0, this.disposeInternal())
        }, V.prototype.disposeInternal = function () {
        };
        var Y = V;

        function H() {
        }

        var K = function (e) {
            this.propagationStopped, this.type = e, this.target = null
        };
        K.prototype.preventDefault = function () {
            this.propagationStopped = !0
        }, K.prototype.stopPropagation = function () {
            this.propagationStopped = !0
        };
        var Z = K, X = function (e) {
            function t(t) {
                e.call(this), this.highWaterMark = void 0 !== t ? t : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.canExpireCache = function () {
                return this.getCount() > this.highWaterMark
            }, t.prototype.clear = function () {
                this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null, this.dispatchEvent(W)
            }, t.prototype.containsKey = function (e) {
                return this.entries_.hasOwnProperty(e)
            }, t.prototype.forEach = function (e, t) {
                for (var o = this.oldest_; o;) e.call(t, o.value_, o.key_, this), o = o.newer
            }, t.prototype.get = function (e) {
                var t = this.entries_[e];
                return m(void 0 !== t, 15), t === this.newest_ ? t.value_ : (t === this.oldest_ ? (this.oldest_ = this.oldest_.newer, this.oldest_.older = null) : (t.newer.older = t.older, t.older.newer = t.newer), t.newer = null, t.older = this.newest_, this.newest_.newer = t, this.newest_ = t, t.value_)
            }, t.prototype.remove = function (e) {
                var t = this.entries_[e];
                return m(void 0 !== t, 15), t === this.newest_ ? (this.newest_ = t.older, this.newest_ && (this.newest_.newer = null)) : t === this.oldest_ ? (this.oldest_ = t.newer, this.oldest_ && (this.oldest_.older = null)) : (t.newer.older = t.older, t.older.newer = t.newer), delete this.entries_[e], --this.count_, t.value_
            }, t.prototype.getCount = function () {
                return this.count_
            }, t.prototype.getKeys = function () {
                var e, t = new Array(this.count_), o = 0;
                for (e = this.newest_; e; e = e.older) t[o++] = e.key_;
                return t
            }, t.prototype.getValues = function () {
                var e, t = new Array(this.count_), o = 0;
                for (e = this.newest_; e; e = e.older) t[o++] = e.value_;
                return t
            }, t.prototype.peekLast = function () {
                return this.oldest_.value_
            }, t.prototype.peekLastKey = function () {
                return this.oldest_.key_
            }, t.prototype.peekFirstKey = function () {
                return this.newest_.key_
            }, t.prototype.pop = function () {
                var e = this.oldest_;
                return delete this.entries_[e.key_], e.newer && (e.newer.older = null), this.oldest_ = e.newer, this.oldest_ || (this.newest_ = null), --this.count_, e.value_
            }, t.prototype.replace = function (e, t) {
                this.get(e), this.entries_[e].value_ = t
            }, t.prototype.set = function (e, t) {
                m(!(e in this.entries_), 16);
                var o = {key_: e, newer: null, older: this.newest_, value_: t};
                this.newest_ ? this.newest_.newer = o : this.oldest_ = o, this.newest_ = o, this.entries_[e] = o, ++this.count_
            }, t.prototype.setSize = function (e) {
                this.highWaterMark = e
            }, t.prototype.prune = function () {
                for (; this.canExpireCache();) this.pop()
            }, t
        }(function (e) {
            function t() {
                e.call(this), this.pendingRemovals_ = {}, this.dispatching_ = {}, this.listeners_ = {}
            }

            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.addEventListener = function (e, t) {
                var o = this.listeners_[e];
                o || (o = this.listeners_[e] = []), -1 === o.indexOf(t) && o.push(t)
            }, t.prototype.dispatchEvent = function (e) {
                var t = "string" == typeof e ? new Z(e) : e, o = t.type;
                t.target = this;
                var r, i = this.listeners_[o];
                if (i) {
                    o in this.dispatching_ || (this.dispatching_[o] = 0, this.pendingRemovals_[o] = 0), ++this.dispatching_[o];
                    for (var n = 0, a = i.length; n < a; ++n) if (!1 === i[n].call(this, t) || t.propagationStopped) {
                        r = !1;
                        break
                    }
                    if (--this.dispatching_[o], 0 === this.dispatching_[o]) {
                        var s = this.pendingRemovals_[o];
                        for (delete this.pendingRemovals_[o]; s--;) this.removeEventListener(o, H);
                        delete this.dispatching_[o]
                    }
                    return r
                }
            }, t.prototype.disposeInternal = function () {
                !function (e) {
                    var t = B(e);
                    if (t) for (var o in t) U(e, o)
                }(this)
            }, t.prototype.getListeners = function (e) {
                return this.listeners_[e]
            }, t.prototype.hasListener = function (e) {
                return e ? e in this.listeners_ : Object.keys(this.listeners_).length > 0
            }, t.prototype.removeEventListener = function (e, t) {
                var o = this.listeners_[e];
                if (o) {
                    var r = o.indexOf(t);
                    e in this.pendingRemovals_ ? (o[r] = H, ++this.pendingRemovals_[e]) : (o.splice(r, 1), 0 === o.length && delete this.listeners_[e])
                }
            }, t
        }(Y));
        new Array(6);
        var Q = new X, ee = {}, te = null, oe = {};
        !function () {
            var e, t, o = 60, r = ee, i = "32px ", n = ["monospace", "serif"], a = n.length,
                s = "wmytzilWMYTZIL@#/&?$%10";

            function l(e) {
                for (var o = re(), r = 100; r <= 700; r += 300) {
                    for (var l = r + " ", u = !0, p = 0; p < a; ++p) {
                        var c = n[p];
                        if (o.font = l + i + c, t = o.measureText(s).width, e != c) {
                            o.font = l + i + e + "," + c;
                            var d = o.measureText(s).width;
                            u = u && d != t
                        }
                    }
                    if (u) return !0
                }
                return !1
            }

            function u() {
                var t = !0;
                for (var i in r) r[i] < o && (l(i) ? (r[i] = o, N(oe), te = null, Q.clear()) : (++r[i], t = !1));
                t && (clearInterval(e), e = void 0)
            }
        }();

        function re() {
            var e, t, o;
            return te || (e = 1, t = 1, o = document.createElement("canvas"), e && (o.width = e), t && (o.height = t), te = o.getContext("2d")), te
        }

        var ie, ne;
        ne = oe;

        function ae(e) {
            return e * Math.PI / 180
        }

        var se = function () {
            for (var e = [], t = 78271.51696402048; e.length <= 24; t /= 2) e.push(t);
            return e
        }();
        var le = Array(256).join(" ");

        function ue(e, t) {
            if (t >= .05) {
                for (var o = "", r = e.split("\n"), i = le.slice(0, Math.round(t / .1)), n = 0, a = r.length; n < a; ++n) n > 0 && (o += "\n"), o += r[n].split("").join(i);
                return o
            }
            return e
        }

        var pe = document.createElement("CANVAS").getContext("2d");

        function ce(e, t) {
            return pe.measureText(e).width + (e.length - 1) * t
        }

        var de = {};

        function he(e, t, o, r) {
            var i = o + "," + t + "," + e + "," + r, n = de[i];
            if (!n) {
                var a = e.split(" ");
                if (a.length > 1) {
                    pe.font = t;
                    for (var s = pe.measureText("M").width * o, l = "", u = [], p = 0, c = a.length; p < c; ++p) {
                        var d = a[p], h = l + (l ? " " : "") + d;
                        ce(h, r) <= s ? l = h : (l && u.push(l), l = d)
                    }
                    l && u.push(l);
                    for (var f = 0, y = u.length; f < y; ++f) {
                        var m = u[f];
                        if (ce(m, r) < .35 * s) {
                            var g = f > 0 ? ce(u[f - 1], r) : 1 / 0, v = f < y - 1 ? ce(u[f + 1], r) : 1 / 0;
                            u.splice(f, 1), g < v ? (u[f - 1] += " " + m, f -= 1) : u[f] = m + " " + u[f], y -= 1
                        }
                    }
                    for (var b = 0, x = u.length - 1; b < x; ++b) {
                        var w = u[b], k = u[b + 1];
                        if (ce(w, r) > .7 * s && ce(k, r) < .6 * s) {
                            var j = w.split(" "), S = j.pop();
                            ce(S, r) < .2 * s && (u[b] = j.join(" "), u[b + 1] = S + " " + k), x -= 1
                        }
                    }
                    n = u.join("\n")
                } else n = e;
                n = ue(n, r), de[i] = n
            }
            return n
        }

        Q && G(Q, W, function () {
            de = {}
        });
        var fe = L.function.isFunction, ye = L.function.convertFunction, me = L.expression.isExpression,
            ge = L.expression.createPropertyExpression,
            ve = {Point: 1, MultiPoint: 1, LineString: 2, MultiLineString: 2, Polygon: 3, MultiPolygon: 3},
            be = function (e, t) {
                var o = ge(e, t);
                if ("error" === o.result) throw new Error(o.value.map(function (e) {
                    return e.key + ": " + e.message
                }).join(", "));
                return o.value
            }, xe = {}, we = {zoom: 0}, ke = {};

        function je(e, t, o, r, i) {
            var n = e.id;
            ke[n] || (ke[n] = {});
            var a = ke[n];
            if (!a[o]) {
                var s = (e[t] || xe)[o], l = q[t + "_" + e.type][o];
                void 0 === s && (s = l.default);
                var u = me(s);
                if (!u && fe(s) && (s = ye(s, l), u = !0), u) {
                    var p = be(s, l);
                    a[o] = p.evaluate.bind(p)
                } else "color" == l.type && (s = L.Color.parse(s)), a[o] = function () {
                    return s
                }
            }
            return we.zoom = r, a[o](we, i)
        }

        var Se = {};

        function Te(e, t, o, r) {
            return e in Se || (Se[e] = Object(L.featureFilter)(t)), we.zoom = r, Se[e](we, o)
        }

        function ze(e, t) {
            if (e) {
                if (0 === e.a || 0 === t) return;
                var o = e.a;
                return t = void 0 === t ? 1 : t, "rgba(" + Math.round(255 * e.r / o) + "," + Math.round(255 * e.g / o) + "," + Math.round(255 * e.b / o) + "," + o * t + ")"
            }
            return e
        }

        var _e = /^([^]*)\{(.*)\}([^]*)$/;

        function Ae(e, t) {
            var o;
            do {
                if (o = e.match(_e)) {
                    var r = t[o[2]] || "";
                    e = o[1] + r + o[3]
                }
            } while (o);
            return e
        }

        var Oe, Ce = function (e, t, o, r, n, s, u) {
                if (void 0 === r && (r = se), "string" == typeof t && (t = JSON.parse(t)), 8 != t.version) throw new Error("glStyle version 8 required.");
                var c, h;
                if (s) {
                    var f = new Image;
                    f.crossOrigin = "anonymous", f.onload = function () {
                        c = f, h = [f.width, f.height], e.changed(), f.onload = null
                    }, f.src = s
                }
                for (var y, m = P(t.layers), g = {}, v = [], b = 0, x = m.length; b < x; ++b) for (var w = m[b], k = w.id, j = 0; j < o.length; j++) {
                    var S = o[j];
                    if ("string" == typeof S && w.source == S || -1 !== S.indexOf(k)) {
                        var T = w["source-layer"];
                        if (!y) {
                            y = w.source;
                            var z = t.sources[y];
                            if (!z) continue;
                            var _ = z.type;
                            if ("vector" !== _ && "geojson" !== _) throw new Error('Source "' + y + '" is not of type "vector" or "geojson", but "' + _ + '"')
                        }
                        var O = g[T];
                        O || (O = g[T] = []), O.push({layer: w, index: b}), v.push(k)
                    }
                    delete ke[k], delete Se[k]
                }
                var R = new p.a, E = new l.a, I = {}, q = {}, L = [], N = function (e, t) {
                    var o = e.getProperties(), s = g[o.layer];
                    if (s) {
                        var f = r.indexOf(t);
                        -1 == f && (f = function (e, t) {
                            for (var o = 0, r = t.length; o < r; ++o) if (t[o] < e && o + 1 < r) {
                                var i = t[o] / t[o + 1];
                                return o + Math.log(t[o] / e) / Math.log(i)
                            }
                            return r - 1
                        }(t, r));
                        for (var y = ve[e.getGeometry().getType()], m = {
                            properties: o,
                            type: y
                        }, v = -1, b = 0, x = s.length; b < x; ++b) {
                            var w = s[b], k = w.layer;
                            if (!1 !== k.visible) {
                                var j = k.id, S = k.layout || xe, T = k.paint || xe;
                                if (!("none" === S.visibility || "minzoom" in k && f < k.minzoom || "maxzoom" in k && f >= k.maxzoom)) {
                                    var z = k.filter;
                                    if (!z || Te(j, z, m, f)) {
                                        var _ = void 0, O = void 0, P = void 0, N = void 0, F = void 0, D = void 0,
                                            B = w.index;
                                        if (3 == y && "fill" == k.type) if (O = je(k, "paint", "fill-opacity", f, m), "fill-pattern" in T) {
                                            var U = je(k, "paint", "fill-pattern", f, m);
                                            if (U) {
                                                var G = Ae(U, o);
                                                if (c && n && n[G]) {
                                                    (D = L[++v]) && D.getFill() && !D.getStroke() && !D.getText() || (D = L[v] = new a.a({fill: new l.a})), P = D.getFill(), D.setZIndex(B);
                                                    var J = G + "." + O, W = q[J];
                                                    if (!W) {
                                                        var $ = n[G], V = document.createElement("canvas");
                                                        V.width = $.width, V.height = $.height;
                                                        var Y = V.getContext("2d");
                                                        Y.globalAlpha = O, Y.drawImage(c, $.x, $.y, $.width, $.height, 0, 0, $.width, $.height), W = Y.createPattern(V, "repeat"), q[J] = W
                                                    }
                                                    P.setColor(W)
                                                }
                                            }
                                        } else (_ = ze(je(k, "paint", "fill-color", f, m), O)) && ("fill-outline-color" in T && (F = ze(je(k, "paint", "fill-outline-color", f, m), O)), F || (F = _), (D = L[++v]) && D.getFill() && D.getStroke() && !D.getText() || (D = L[v] = new a.a({
                                            fill: new l.a,
                                            stroke: new p.a
                                        })), (P = D.getFill()).setColor(_), (N = D.getStroke()).setColor(F), N.setWidth(1), D.setZIndex(B));
                                        if (1 != y && "line" == k.type) {
                                            _ = !("line-pattern" in T) && "line-color" in T ? ze(je(k, "paint", "line-color", f, m), je(k, "paint", "line-opacity", f, m)) : void 0;
                                            var H = je(k, "paint", "line-width", f, m);
                                            _ && H > 0 && ((D = L[++v]) && D.getStroke() && !D.getFill() && !D.getText() || (D = L[v] = new a.a({stroke: new p.a})), (N = D.getStroke()).setLineCap(je(k, "layout", "line-cap", f, m)), N.setLineJoin(je(k, "layout", "line-join", f, m)), N.setMiterLimit(je(k, "layout", "line-miter-limit", f, m)), N.setColor(_), N.setWidth(H), N.setLineDash(T["line-dasharray"] ? je(k, "paint", "line-dasharray", f, m).map(function (e) {
                                                return e * H
                                            }) : null), D.setZIndex(B))
                                        }
                                        var K = !1, Z = null, X = 0, Q = void 0, ee = void 0, te = void 0;
                                        if ((1 == y || 2 == y) && "icon-image" in S) {
                                            var oe = je(k, "layout", "icon-image", f, m);
                                            if (oe) {
                                                Q = Ae(oe, o);
                                                var re = void 0;
                                                if (c && n && n[Q]) {
                                                    var ie = je(k, "layout", "icon-rotation-alignment", f, m);
                                                    if (2 == y) {
                                                        var ne = e.getGeometry();
                                                        if (ne.getFlatMidpoint) {
                                                            var se = ne.getExtent();
                                                            if (Math.sqrt(Math.max(Math.pow((se[2] - se[0]) / t, 2), Math.pow((se[3] - se[1]) / t, 2))) > 150) {
                                                                var le = ne.getFlatMidpoint();
                                                                if (re = new M.a(le), "line" === je(k, "layout", "symbol-placement", f, m) && "map" === ie) for (var pe = ne.getStride(), ce = ne.getFlatCoordinates(), de = 0, fe = ce.length - pe; de < fe; de += pe) {
                                                                    var ye = ce[de], me = ce[de + 1], ge = ce[de + pe],
                                                                        be = ce[de + pe + 1], we = Math.min(ye, ge),
                                                                        ke = Math.min(me, be), Se = Math.max(ye, ge),
                                                                        _e = Math.max(me, be);
                                                                    if (le[0] >= we && le[0] <= Se && le[1] >= ke && le[1] <= _e) {
                                                                        X = Math.atan2(me - be, ge - ye);
                                                                        break
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (2 !== y || re) {
                                                        (D = L[++v]) && D.getImage() && !D.getFill() && !D.getStroke() || (D = L[v] = new a.a), D.setGeometry(re);
                                                        var Oe = je(k, "layout", "icon-size", f, m),
                                                            Ce = void 0 !== T["icon-color"] ? je(k, "paint", "icon-color", f, m) : null,
                                                            Re = Q + "." + Oe;
                                                        if (null !== Ce && (Re += "." + Ce), !(ee = I[Re])) {
                                                            var Me = n[Q];
                                                            if (null !== Ce) {
                                                                _ = ze(Ce, 1);
                                                                var Ee = document.createElement("canvas");
                                                                Ee.width = Me.width, Ee.height = Me.height;
                                                                var Ie = Ee.getContext("2d");
                                                                Ie.drawImage(c, Me.x, Me.y, Me.width, Me.height, 0, 0, Me.width, Me.height);
                                                                for (var Pe = Ie.getImageData(0, 0, Ee.width, Ee.height), qe = 0, Le = Pe.data.length; qe < Le; qe += 4) Pe.data[qe] = _[0], Pe.data[qe + 1] = _[1], Pe.data[qe + 2] = _[2];
                                                                Ie.putImageData(Pe, 0, 0), ee = I[Re] = new d.a({
                                                                    img: Ee,
                                                                    imgSize: [Ee.width, Ee.height],
                                                                    scale: Oe / Me.pixelRatio
                                                                })
                                                            } else ee = I[Re] = new d.a({
                                                                img: c,
                                                                imgSize: h,
                                                                size: [Me.width, Me.height],
                                                                offset: [Me.x, Me.y],
                                                                rotateWithView: "map" === ie,
                                                                scale: Oe / Me.pixelRatio
                                                            })
                                                        }
                                                        ee.setRotation(X + ae(je(k, "layout", "icon-rotate", f, m))), ee.setOpacity(je(k, "paint", "icon-opacity", f, m)), D.setImage(ee), Z = D.getText(), D.setText(void 0), D.setZIndex(99999 - B), K = !0, te = !1
                                                    } else te = !0
                                                }
                                            }
                                        }
                                        if (1 == y && "circle-radius" in T) {
                                            (D = L[++v]) && D.getImage() && !D.getFill() && !D.getStroke() || (D = L[v] = new a.a);
                                            var Ne = je(k, "paint", "circle-radius", f, m),
                                                Fe = ze(je(k, "paint", "circle-stroke-color", f, m), je(k, "paint", "circle-stroke-opacity", f, m)),
                                                De = ze(je(k, "paint", "circle-color", f, m), je(k, "paint", "circle-opacity", f, m)),
                                                Be = je(k, "paint", "circle-stroke-width", f, m),
                                                Ue = Ne + "." + Fe + "." + De + "." + Be;
                                            (ee = I[Ue]) || (ee = I[Ue] = new C.a({
                                                radius: Ne,
                                                stroke: Fe && Be > 0 ? new p.a({width: Be, color: Fe}) : void 0,
                                                fill: De ? new l.a({color: De}) : void 0
                                            })), D.setImage(ee), Z = D.getText(), D.setText(void 0), D.setGeometry(void 0), D.setZIndex(99999 - B), K = !0
                                        }
                                        var Ge = void 0;
                                        if ("text-field" in S) Ge = Ae(je(k, "layout", "text-field", f, m).toString(), o), O = je(k, "paint", "text-opacity", f, m);
                                        if (Ge && O && !te) {
                                            K || ((D = L[++v]) && D.getText() && !D.getFill() && !D.getStroke() || (D = L[v] = new a.a), D.setImage(void 0), D.setGeometry(void 0)), D.getText() || D.setText(Z || new A({padding: [2, 2, 2, 2]})), Z = D.getText();
                                            var Je = je(k, "layout", "text-size", f, m),
                                                We = je(k, "layout", "text-font", f, m),
                                                $e = je(k, "layout", "text-line-height", f, m),
                                                Ve = i()(u ? u(We) : We, Je, $e), Ye = S["text-transform"];
                                            "uppercase" == Ye ? Ge = Ge.toUpperCase() : "lowercase" == Ye && (Ge = Ge.toLowerCase());
                                            var He = je(k, "layout", "text-max-width", f, m),
                                                Ke = je(k, "layout", "text-letter-spacing", f, m),
                                                Ze = 2 == y ? ue(Ge, Ke) : he(Ge, Ve, He, Ke);
                                            Ze = Ze.replace(/\|/g, ""), Z.setText(Ze), Z.setFont(Ve), Z.setRotation(ae(je(k, "layout", "text-rotate", f, m)));
                                            var Xe = je(k, "layout", "text-anchor", f, m),
                                                Qe = K || 1 == y ? "point" : je(k, "layout", "symbol-placement", f, m);
                                            Z.setPlacement(Qe);
                                            var et = je(k, "paint", "text-halo-width", f, m),
                                                tt = je(k, "layout", "text-offset", f, m),
                                                ot = je(k, "paint", "text-translate", f, m), rt = 0, it = 0;
                                            if ("point" == Qe) {
                                                var nt = "center";
                                                -1 !== Xe.indexOf("left") ? (nt = "left", it = et) : -1 !== Xe.indexOf("right") && (nt = "right", it = -et), Z.setTextAlign(nt)
                                            } else Z.setMaxAngle(ae(je(k, "layout", "text-max-angle", f, m))), Z.setTextAlign();
                                            var at = "middle";
                                            0 == Xe.indexOf("bottom") ? (at = "bottom", rt = -et - .5 * ($e - 1) * Je) : 0 == Xe.indexOf("top") && (at = "top", rt = et + .5 * ($e - 1) * Je), Z.setTextBaseline(at), Z.setOffsetX(tt[0] * Je + it + ot[0]), Z.setOffsetY(tt[1] * Je + rt + ot[1]), E.setColor(ze(je(k, "paint", "text-color", f, m), O)), Z.setFill(E);
                                            var st = ze(je(k, "paint", "text-halo-color", f, m), O);
                                            if (st) {
                                                R.setColor(st), et *= 2;
                                                var lt = .5 * Je;
                                                R.setWidth(et <= lt ? et : lt), Z.setStroke(R)
                                            } else Z.setStroke(void 0);
                                            var ut = je(k, "layout", "text-padding", f, m), pt = Z.getPadding();
                                            ut !== pt[0] && (pt[0] = pt[1] = pt[2] = pt[3] = ut), D.setZIndex(99999 - B)
                                        }
                                    }
                                }
                            }
                        }
                        return v > -1 ? (L.length = v + 1, L) : void 0
                    }
                };
                return e.setStyle(N), e.set("mapbox-source", y), e.set("mapbox-layers", v), N
            }, Re = o(19), Me = o.n(Re), Ee = o(7), Ie = o(20), Pe = o(9), qe = o.n(Pe), Le = o(4), Ne = o.n(Le),
            Fe = o(21), De = o.n(Fe), Be = o(22), Ue = o.n(Be), Ge = o(23), Je = o.n(Ge), We = o(5), $e = o(24),
            Ve = o.n($e), Ye = o(10), He = o.n(Ye), Ke = o(11), Ze = o.n(Ke), Xe = o(12), Qe = o.n(Xe), et = o(13),
            tt = o.n(et), ot = o(14), rt = o.n(ot), it = /font-family: ?([^;]*);/, nt = /("|')/g;

        function at(e) {
            if (!Oe) {
                Oe = {};
                for (var t = document.styleSheets, o = 0, r = t.length; o < r; ++o) {
                    var i = t[o];
                    try {
                        var n = i.rules || i.cssRules;
                        if (n) for (var a = 0, s = n.length; a < s; ++a) {
                            var l = n[a];
                            if (5 == l.type) {
                                var u = l.cssText.match(it);
                                Oe[u[1].replace(nt, "")] = !0
                            }
                        }
                    } catch (e) {
                    }
                }
            }
            return e in Oe
        }

        var st = {}, lt = Me.a.getNames();

        function ut(e) {
            var t = e.toString();
            if (t in st) return e;
            for (var o = e.map(function (e) {
                var t = i()(e, 1).split(" ");
                return [t.slice(3, 5).join(" ").replace(/"/g, ""), t[1] + t[0]]
            }), r = 0, n = o.length; r < n; ++r) {
                var a = o[r], s = a[0];
                if (!at(s) && -1 !== lt.indexOf(s)) {
                    var l = "https://fonts.googleapis.com/css?family=" + s.replace(/ /g, "+") + ":" + a[1];
                    if (!document.querySelector('link[href="' + l + '"]')) {
                        var u = document.createElement("link");
                        u.href = l, u.rel = "stylesheet", document.head.appendChild(u)
                    }
                }
            }
            return st[t] = !0, e
        }

        var pt = /^(.*)(\?.*)$/;

        function ct(e, t) {
            return t && e.startsWith(".") && (e = t + e), e
        }

        function dt(e, t, o) {
            var r = (e = ct(e, t)).match(pt);
            return r ? r[1] + o + (r.length > 2 ? r[2] : "") : e + o
        }

        function ht(e, t, o, r, i) {
            return new Promise(function (n, a) {
                if ("object" != typeof t && (t = JSON.parse(t)), 8 != t.version) return a(new Error("glStyle version 8 required."));
                if (!(e instanceof He.a || e instanceof Ze.a)) return a(new Error("Can only apply to VectorLayer or VectorTileLayer"));
                var s, l, u;

                function p() {
                    u || t.sprite && !s ? u ? (e.setStyle(u), n()) : a(new Error("Something went wrong trying to apply style.")) : (u = Ce(e, t, o, i, s, l, ut), e.getStyle() ? n() : a(new Error("Nothing to show for source [" + o + "]")))
                }

                if (t.sprite) {
                    var c = .5 == (window.devicePixelRatio >= 1.5 ? .5 : 1) ? "@2x" : "",
                        d = dt(t.sprite, r, c + ".json");
                    fetch(d, {credentials: "same-origin"}).then(function (e) {
                        return e.ok || "" === c ? e : (d = dt(t.sprite, r, ".json"), fetch(d, {credentials: "same-origin"}))
                    }).then(function (e) {
                        if (e.ok) return e.json();
                        a(new Error("Problem fetching sprite from " + d + ": " + e.statusText))
                    }).then(function (e) {
                        if (void 0 === e || 0 === Object.keys(e).length) return a(new Error("No sprites found."));
                        s = e, l = dt(t.sprite, r, c + ".png"), p()
                    }).catch(function (e) {
                        a(new Error("Sprites cannot be loaded: " + d + ": " + e.message))
                    })
                } else p()
            })
        }

        var ft = {};

        function yt(e, t) {
            var o = {type: t.type};

            function r() {
                var r = e.getTargetElement();
                if (r) {
                    var i = t.layout || {}, n = t.paint || {};
                    o.paint = n, o.id = "olms-bg-" + n["background-opacity"] + n["background-color"];
                    var a = e.getView().getZoom();
                    if (void 0 !== n["background-color"]) {
                        var s = je(o, "paint", "background-color", a, ft);
                        r.style.backgroundColor = L.Color.parse(s).toString()
                    }
                    void 0 !== n["background-opacity"] && (r.style.opacity = je(o, "paint", "background-opacity", a, ft)), "none" == i.visibility && (r.style.backgroundColor = "", r.style.opacity = "")
                }
            }

            e.getTargetElement() && r(), e.on(["change:resolution", "change:target"], r), e.getView().on("change:resolution", r)
        }

        function mt(e, t) {
            var o;
            return e.some(function (e) {
                if (e.id == t) return o = e.source, !0
            }), o
        }

        function gt(e) {
            var t = e.bounds;
            if (t) {
                var o = Object(Ee.fromLonLat)([t[0], t[1]]), r = Object(Ee.fromLonLat)([t[2], t[3]]);
                return [o[0], o[1], r[0], r[1]]
            }
        }

        function vt(e, t, o) {
            if (e = Object.assign({}, e), o && 0 == o.indexOf("mapbox://")) {
                var r = o.replace("mapbox://", "");
                e.tiles = ["a", "b", "c", "d"].map(function (o) {
                    return "https://" + o + ".tiles.mapbox.com/v4/" + r + "/{z}/{x}/{y}." + ("vector" == e.type ? "vector.pbf" : "png") + t
                })
            }
            var i = new Ze.a({declutter: !0, visible: !1}),
                n = new Qe.a({url: e.tiles ? void 0 : o, tileJSON: e.tiles ? e : void 0}),
                a = n.on("change", function () {
                    var t = n.getState();
                    if ("ready" === t) {
                        var o = n.getTileJSON(), r = Array.isArray(o.tiles) ? o.tiles : [o.tiles];
                        if (e.url) for (var s = 0, l = r.length; s < l; ++s) {
                            var u = r[s];
                            0 != u.indexOf("http") && (r[s] = e.url + u)
                        }
                        var p = n.getTileGrid(), c = gt(o), d = o.minzoom || 0, h = o.maxzoom || 22, f = new rt.a({
                            attributions: n.getAttributions(),
                            format: new Je.a,
                            tileGrid: new qe.a({
                                origin: p.getOrigin(),
                                extent: c || p.getExtent(),
                                minZoom: d,
                                resolutions: se.slice(0, h + 1),
                                tileSize: 512
                            }),
                            urls: r
                        });
                        Object(We.unByKey)(a), i.setSource(f)
                    } else "error" === t && (Object(We.unByKey)(a), i.setSource(void 0))
                });
            return e.tiles && n.changed(), i
        }

        function bt(e, t) {
            var o = new Ve.a, r = new Qe.a({
                transition: 0,
                url: e.tiles ? void 0 : t,
                tileJSON: e.tiles ? e : void 0,
                crossOrigin: "anonymous"
            }), i = r.on("change", function () {
                var t = r.getState();
                if ("ready" === t) {
                    Object(We.unByKey)(i);
                    var n = r.getTileJSON(), a = gt(n), s = r.getTileGrid(), l = e.tileSize || n.tileSize || 512,
                        u = n.minzoom || 0, p = n.maxzoom || 22;
                    r.tileGrid = new qe.a({
                        origin: s.getOrigin(),
                        extent: a || s.getExtent(),
                        minZoom: u,
                        resolutions: Object(Ie.createXYZ)({maxZoom: p, tileSize: l}).getResolutions(),
                        tileSize: l
                    }), o.setSource(r)
                } else "error" === t && (Object(We.unByKey)(i), o.setSource(void 0))
            });
            return r.setTileLoadFunction(function (e, t) {
                if (-1 != t.indexOf("{bbox-epsg-3857}")) {
                    var o = r.getTileGrid().getTileCoordExtent(e.getTileCoord());
                    t = t.replace("{bbox-epsg-3857}", o.toString())
                }
                e.getImage().src = t
            }), o
        }

        var xt = new Ue.a;

        function wt(e, t) {
            var o, r, i = e.data;
            return "string" == typeof i ? r = ct(i, t) : o = xt.readFeatures(i, {featureProjection: "EPSG:3857"}), new He.a({
                source: new tt.a({
                    attributions: e.attribution,
                    features: o,
                    format: xt,
                    url: r
                }), visible: !1
            })
        }

        function kt(e, t, o) {
            var r = je(e, "paint", "raster-opacity", o.getZoom(), ft);
            t.setOpacity(r)
        }

        function jt(e, t, o, r, i, n) {
            var a = [], s = t.getView();
            s.isDef() || s.getRotation() || s.getResolutions() || (s = new De.a({resolutions: se}), t.setView(s)), "center" in e && !s.getCenter() && s.setCenter(Object(Ee.fromLonLat)(e.center)), "zoom" in e && void 0 === s.getZoom() && s.setResolution(se[0] / Math.pow(2, e.zoom)), s.getCenter() && void 0 !== s.getZoom() || s.fit(s.getProjection().getExtent(), {
                nearest: !0,
                size: t.getSize()
            }), e.sprite && (0 == e.sprite.indexOf("mapbox://") ? e.sprite = o + "/sprite" + n : 0 != e.sprite.indexOf("http") && (e.sprite = (r ? r + i : "") + e.sprite + n));
            for (var l, u, p, c, d, h, f = e.layers, y = [], m = 0, g = f.length; m < g; ++m) {
                var v = (l = f[m]).type;
                "heatmap" == v || "fill-extrusion" == v || "hillshade" == v || ("background" == v ? yt(t, l) : ((c = l.source || mt(f, l.ref)) != p && (y.length && (a.push(Tt(d, y, e, i, t)), y = []), (h = (u = e.sources[c]).url) && i && h.startsWith(".") && (h = i + h), "vector" == u.type ? d = vt(u, n, h) : "raster" == u.type ? ((d = bt(u, h)).setVisible(!l.layout || "none" !== l.layout.visibility), s.on("change:resolution", kt.bind(this, l, d, s)), kt(l, d, s)) : "geojson" == u.type && (d = wt(u, i)), p = c, d && d.set("mapbox-source", p)), y.push(l.id)))
            }
            return a.push(Tt(d, y, e, i, t)), t.set("mapbox-style", e), Promise.all(a)
        }

        function St(e, t) {
            var o, r, i, n, a;
            if (o = r = i = n = "", e instanceof Ne.a || (e = new Ne.a({target: e})), "string" == typeof t) {
                var s = t.match(pt);
                s && (r = s[1], o = s.length > 2 ? s[2] : ""), a = new Promise(function (a, s) {
                    fetch(t, {credentials: "same-origin"}).then(function (e) {
                        return e.json()
                    }).then(function (l) {
                        var u = document.createElement("A");
                        u.href = t;
                        var p = u.href;
                        n = u.pathname.split("/").slice(0, -1).join("/") + "/", i = p.substr(0, p.indexOf(n)), jt(l, e, r, i, n, o).then(function () {
                            a(e)
                        }).catch(s)
                    }).catch(function (e) {
                        s(new Error("Could not load " + t + ": " + e.message))
                    })
                })
            } else a = new Promise(function (o, r) {
                jt(t, e).then(function () {
                    o(e)
                }).catch(r)
            });
            return a
        }

        function Tt(e, t, o, r, i) {
            for (var n = 24, a = 0, s = o.layers, l = 0, u = s.length; l < u; ++l) {
                var p = s[l];
                -1 !== t.indexOf(p.id) && (n = Math.min("minzoom" in p ? p.minzoom : 0, n), a = Math.max("maxzoom" in p ? p.maxzoom : 24, a))
            }
            return new Promise(function (s, l) {
                var u = function () {
                    var i = e.getSource();
                    if (i && "error" !== i.getState()) {
                        if ("function" == typeof i.getTileGrid) {
                            var u = i.getTileGrid();
                            if (u) {
                                var p = u.getMinZoom();
                                (n > 0 || p > 0) && e.setMaxResolution(Math.min(se[n], u.getResolution(p)) + 1e-9), a < 24 && e.setMinResolution(se[a] + 1e-9)
                            }
                        }
                        i instanceof tt.a || i instanceof rt.a ? ht(e, o, t, r).then(function () {
                            e.setVisible(!0), s()
                        }, function (e) {
                            l(e)
                        }) : s()
                    } else l(new Error("Error accessing data for source " + e.get("mapbox-source")))
                };
                e.set("mapbox-layers", t), -1 === i.getLayers().getArray().indexOf(e) && i.addLayer(e), e.getSource() ? u() : e.once("change:source", u)
            })
        }

        St.apply = function (e, t) {
            return e instanceof Ne.a || (e = new Ne.a({target: e})), setTimeout(function () {
                St(e, t)
            }, 0), e
        }, St.applyBackground = function (e, t) {
            t.layers.some(function (t) {
                if ("background" == t.type) return yt(e, t), !0
            })
        }, St.applyStyle = ht, St.stylefunction = Ce;
        t.default = St
    }]).default;