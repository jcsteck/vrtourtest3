TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 91,
  "id": "panorama_92727162_9F53_4317_41E3_736FE0DB01F6",
  "cardboardMenu": {
   "opacity": 0.4,
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "selectedFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "id": "Menu_8F6AD560_9F76_8243_41D0_F93A913CCD97",
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "rollOverOpacity": 0.8,
   "children": [
    {
     "label": "PIC_20190904_172919_20190906091310",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "PIC_20190904_181043_20190906091310",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    }
   ]
  },
  "thumbnailUrl": "media/panorama_92727162_9F53_4317_41E3_736FE0DB01F6_t.jpg",
  "pitch": 0,
  "frames": [
   {
    "snapshots": [
     {
      "position": {
       "hfov": 91,
       "yaw": -87.53,
       "class": "PanoramaCameraPosition",
       "pitch": -3.53
      },
      "id": "snapshot_95A1EFC4_9F53_5F1C_41D9_7250DA3800A2",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1500,
         "width": 1500,
         "url": "media/snapshot_95A1EFC4_9F53_5F1C_41D9_7250DA3800A2.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "class": "PanoramaSnapshot"
     }
    ],
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 7680,
       "width": 7680,
       "url": "media/panorama_92727162_9F53_4317_41E3_736FE0DB01F6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_92727162_9F53_4317_41E3_736FE0DB01F6.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "id": "overlay_93EFC93A_9F57_4377_41E0_D39E355B48C1",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showWindow(this.window_916A9773_9F51_4FF4_41DE_760BF57B27CD, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 189,
           "width": 200,
           "url": "media/panorama_92727162_9F53_4317_41E3_736FE0DB01F6_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 33.66,
        "hfov": 41.17,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -56.96
       }
      ],
      "items": [
       {
        "yaw": 33.66,
        "hfov": 41.17,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 873,
           "width": 918,
           "url": "media/panorama_92727162_9F53_4317_41E3_736FE0DB01F6_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -56.96
       }
      ]
     },
     {
      "yaw": 109.91,
      "bleaching": 0.94,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_9081F827_9F51_C11C_41BD_AD1D5761558F",
      "bleachingDistance": 0.78,
      "pitch": 11.12
     },
     {
      "yaw": -18.46,
      "bleaching": 0.18,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_908FEADC_9F51_C12C_41E2_038346217559",
      "bleachingDistance": 0.4,
      "pitch": 61.86
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_8F74577D_9F53_4FED_41D4_C810E509491D",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F, this.camera_8F30157C_9F76_8243_4171_D69FD6329615); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 152,
           "width": 200,
           "url": "media/panorama_92727162_9F53_4317_41E3_736FE0DB01F6_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -157.14,
        "hfov": 29.32,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.41
       }
      ],
      "items": [
       {
        "yaw": -157.14,
        "hfov": 29.32,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 489,
           "width": 643,
           "url": "media/panorama_92727162_9F53_4317_41E3_736FE0DB01F6_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -13.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_92727162_9F53_4317_41E3_736FE0DB01F6_t.jpg"
   }
  ],
  "label": "PIC_20190904_172919_20190906091310",
  "class": "Panorama",
  "hfovMin": 91,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F",
     "cardboardMenu": "this.Menu_8F6AD560_9F76_8243_41D0_F93A913CCD97",
     "thumbnailUrl": "media/panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F_t.jpg",
     "pitch": 0,
     "frames": [
      {
       "snapshots": [
        {
         "position": {
          "hfov": 120,
          "yaw": -38.94,
          "class": "PanoramaCameraPosition",
          "pitch": -14.07
         },
         "id": "snapshot_949F499F_9F57_432D_41C0_9D65964CE035",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 1500,
            "width": 1500,
            "url": "media/snapshot_949F499F_9F57_432D_41C0_9D65964CE035.jpg",
            "class": "ImageResourceLevel"
           }
          ]
         },
         "class": "PanoramaSnapshot"
        }
       ],
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "width": 6434,
          "url": "media/panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 3217,
          "width": 3217,
          "url": "media/panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_8FD30C40_9F51_C113_41C0_15450544E2F8",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_92727162_9F53_4317_41E3_736FE0DB01F6, this.camera_8F428572_9F76_8247_41CF_EDC96022E7F5); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 180,
              "width": 161,
              "url": "media/panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -16.2,
           "hfov": 17.66,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -12.53
          }
         ],
         "items": [
          {
           "yaw": -16.2,
           "hfov": 17.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 360,
              "width": 323,
              "url": "media/panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -12.53
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F_t.jpg"
      }
     ],
     "label": "PIC_20190904_181043_20190906091310",
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_92727162_9F53_4317_41E3_736FE0DB01F6",
       "backwardYaw": -157.14,
       "yaw": -16.2,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": -16.2,
    "yaw": -157.14,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ]
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonPause": {
   "paddingRight": 0,
   "mode": "toggle",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonPlayLeft": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41B5_303051AFBE15",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_pressed.png",
   "verticalAlign": "middle"
  },
  "gyroscopeEnabled": true,
  "buttonZoomOut": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonMoveRight": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonRestart": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_pressed.png",
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonMoveUp": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_pressed.png",
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "buttonMoveLeft": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_pressed.png",
   "verticalAlign": "middle"
  },
  "buttonPlayRight": {
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "minHeight": 0,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_rollover.png",
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33.png",
   "minWidth": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_pressed.png",
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_92727162_9F53_4317_41E3_736FE0DB01F6_camera",
  "automaticZoomSpeed": 1,
  "initialPosition": {
   "hfov": 91,
   "yaw": -87.53,
   "class": "PanoramaCameraPosition",
   "pitch": -3.53
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -38.94,
   "class": "PanoramaCameraPosition",
   "pitch": -14.07
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_92727162_9F53_4317_41E3_736FE0DB01F6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_92727162_9F53_4317_41E3_736FE0DB01F6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)"
   }
  ]
 },
 {
  "id": "ThumbnailList_90788D79_9F6D_8244_41C8_FBA7C497D624_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_92727162_9F53_4317_41E3_736FE0DB01F6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_92727162_9F53_4317_41E3_736FE0DB01F6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_90788D79_9F6D_8244_41C8_FBA7C497D624_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_926F4B9F_9F57_472C_41DF_18D5AD4B005F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_90788D79_9F6D_8244_41C8_FBA7C497D624_playlist, 1, 0)"
   }
  ]
 },
 "this.Menu_8F6AD560_9F76_8243_41D0_F93A913CCD97",
 {
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "headerPaddingBottom": 10,
  "closeButtonPaddingLeft": 0,
  "paddingRight": 0,
  "bodyBackgroundOpacity": 1,
  "overflow": "scroll",
  "closeButtonPaddingTop": 0,
  "backgroundColor": [],
  "modal": true,
  "shadowBlurRadius": 6,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "scrollBarMargin": 2,
  "headerPaddingRight": 10,
  "headerBorderColor": "#000000",
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "gap": 10,
  "closeButtonPaddingRight": 0,
  "title": "THis is the title",
  "headerBorderSize": 0,
  "bodyPaddingRight": 5,
  "shadow": true,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontColor": "#000000",
  "scrollBarColor": "#000000",
  "bodyBorderColor": "#000000",
  "closeButtonBackgroundColor": [],
  "shadowColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "minWidth": 20,
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "titleTextDecoration": "none",
  "closeButtonBackgroundOpacity": 1,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "titleFontSize": 14,
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "closeButtonBackgroundColorRatios": [],
  "titleFontWeight": "normal",
  "children": [
   {
    "paddingRight": 10,
    "paddingLeft": 10,
    "borderRadius": 0,
    "minHeight": 0,
    "scrollBarMargin": 2,
    "width": "100%",
    "backgroundOpacity": 0,
    "borderSize": 0,
    "height": "50%",
    "class": "HTMLText",
    "shadow": false,
    "scrollBarWidth": 10,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">lorem ipsum lorem lorem ipsimgadf adf gad g sfdgs dfh</SPAN></DIV></div>",
    "id": "htmlText_uid8F79F556_9F76_824F_41DF_85DD4DA0D18C",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "minWidth": 0,
    "paddingTop": 10
   },
   {
    "borderSize": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "width": "100%",
    "id": "image_uid8F79F556_9F76_824F_41DF_85DD4DA0D18C_1",
    "url": "media/photo_921F1247_9F51_411D_419D_4BB7383F336D.png",
    "paddingLeft": 0,
    "minHeight": 0,
    "minWidth": 0,
    "paddingTop": 0,
    "height": "50%",
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "verticalAlign": "middle",
    "borderRadius": 0
   }
  ],
  "bodyBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "shadowHorizontalLength": 3,
  "paddingLeft": 0,
  "height": 600,
  "closeButtonBorderRadius": 11,
  "minHeight": 20,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingBottom": 0,
  "backgroundOpacity": 1,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "borderSize": 0,
  "shadowOpacity": 0.5,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "footerHeight": 5,
  "class": "Window",
  "headerBackgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "closeButtonIconWidth": 12,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconHeight": 12,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 5,
  "veilColorDirection": "horizontal",
  "closeButtonBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_916A9773_9F51_4FF4_41DE_760BF57B27CD",
  "veilOpacity": 0.4,
  "contentOpaque": false,
  "layout": "vertical",
  "closeButtonIconLineWidth": 2,
  "closeButtonIconColor": "#000000",
  "headerPaddingLeft": 10,
  "titleFontStyle": "normal",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "headerPaddingTop": 10,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "titlePaddingLeft": 5,
  "titlePaddingBottom": 5
 },
 {
  "id": "camera_8F428572_9F76_8247_41CF_EDC96022E7F5",
  "automaticZoomSpeed": 1,
  "initialPosition": {
   "hfov": 91,
   "yaw": 22.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_8F30157C_9F76_8243_4171_D69FD6329615",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 163.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "label": "silk-soy-logo",
  "width": 1000,
  "id": "photo_921F1247_9F51_411D_419D_4BB7383F336D",
  "class": "Photo",
  "height": 1000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_921F1247_9F51_411D_419D_4BB7383F336D.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "duration": 5000,
  "thumbnailUrl": "media/photo_921F1247_9F51_411D_419D_4BB7383F336D_t.png"
 }
], "children": [
 {
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "paddingRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#606060",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 2,
  "shadow": false,
  "progressBottom": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "transitionMode": "blending",
  "progressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadHeight": 30,
  "progressBarBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarLeft": 0,
  "minWidth": 100,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBackgroundOpacity": 1,
  "toolTipOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressHeight": 20,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 2,
  "toolTipShadowSpread": 0,
  "borderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 10,
  "paddingLeft": 0,
  "minHeight": 50,
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "width": "100%",
  "borderSize": 0,
  "height": "100%",
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "top": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6,
  "id": "MainViewer",
  "playbackBarBorderRadius": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingRight": 6,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "progressBorderRadius": 4,
  "playbackBarProgressBorderColor": "#000000",
  "left": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "playbackBarRight": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20
 },
 {
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingLeft": 0,
  "height": 142,
  "borderRadius": 0,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "width": "100%",
  "backgroundOpacity": 0,
  "layout": "horizontal",
  "borderSize": 0,
  "class": "Container",
  "shadow": false,
  "scrollBarWidth": 10,
  "gap": 10,
  "bottom": "0%",
  "paddingBottom": 0,
  "horizontalAlign": "center",
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "paddingTop": 0,
  "left": "0%",
  "contentOpaque": false,
  "children": [
   {
    "paddingRight": 0,
    "borderRadius": 0,
    "paddingLeft": 0,
    "overflow": "hidden",
    "width": 421,
    "minHeight": 20,
    "height": "100%",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "borderSize": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarWidth": 10,
    "gap": 4,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "id": "Container_52344940_5F01_EFC4_41D4_ABA40101D8BF",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "minWidth": 421,
    "paddingTop": 0,
    "contentOpaque": false,
    "children": [
     "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
     "this.IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
     "this.IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
     "this.IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
     {
      "paddingRight": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "overflow": "hidden",
      "width": 40,
      "minHeight": 20,
      "height": "100%",
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "layout": "vertical",
      "borderSize": 0,
      "class": "Container",
      "shadow": false,
      "scrollBarWidth": 10,
      "gap": 4,
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "id": "Container_52344940_5F01_EFC4_41D6_7E3303CC9C74",
      "scrollBarOpacity": 0.5,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "minWidth": 20,
      "paddingTop": 0,
      "contentOpaque": false,
      "children": [
       "this.IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
       "this.IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
       "this.IconButton_52344940_5F01_EFC4_41B5_303051AFBE15"
      ],
      "verticalAlign": "middle"
     },
     "this.IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
     "this.IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
     {
      "paddingRight": 0,
      "mode": "toggle",
      "borderRadius": 0,
      "paddingLeft": 0,
      "height": 40,
      "width": 40,
      "minHeight": 0,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "class": "IconButton",
      "shadow": false,
      "transparencyActive": true,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
      "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC.png",
      "minWidth": 0,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC_pressed.png",
      "verticalAlign": "middle"
     },
     "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375"
    ],
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle"
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailOpacity": 1,
  "playList": "this.ThumbnailList_90788D79_9F6D_8244_41C8_FBA7C497D624_playlist",
  "paddingRight": 20,
  "itemLabelTextDecoration": "none",
  "scrollBarMargin": 2,
  "selectedItemLabelFontWeight": "bold",
  "gap": 10,
  "itemHorizontalAlign": "center",
  "itemThumbnailHeight": 75,
  "itemThumbnailShadowSpread": 1,
  "rollOverItemBackgroundOpacity": 0,
  "shadow": false,
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "itemThumbnailShadowVerticalLength": 3,
  "itemBackgroundColorRatios": [],
  "itemBorderRadius": 0,
  "paddingBottom": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailShadowOpacity": 0.54,
  "itemMode": "normal",
  "scrollBarColor": "#FFFFFF",
  "itemPaddingLeft": 3,
  "scrollBarVisible": "rollOver",
  "minWidth": 20,
  "paddingTop": 10,
  "scrollBarOpacity": 0.5,
  "itemThumbnailShadowBlurRadius": 8,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontSize": 14,
  "itemPaddingTop": 3,
  "backgroundColorDirection": "vertical",
  "itemThumbnailBorderRadius": 50,
  "selectedItemLabelFontColor": "#FFCC00",
  "itemLabelFontWeight": "normal",
  "rollOverItemLabelFontWeight": "normal",
  "width": 142,
  "paddingLeft": 20,
  "borderRadius": 5,
  "minHeight": 20,
  "height": "55.376%",
  "itemLabelHorizontalAlign": "center",
  "backgroundOpacity": 0.24,
  "itemThumbnailWidth": 75,
  "borderSize": 0,
  "itemPaddingRight": 3,
  "class": "ThumbnailList",
  "layout": "vertical",
  "itemLabelGap": 9,
  "itemBackgroundColor": [],
  "itemBackgroundOpacity": 0,
  "top": "7.96%",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemPaddingBottom": 3,
  "itemOpacity": 1,
  "id": "ThumbnailList_90788D79_9F6D_8244_41C8_FBA7C497D624",
  "itemLabelPosition": "bottom",
  "itemThumbnailShadow": true,
  "itemLabelFontStyle": "normal",
  "itemLabelFontFamily": "Arial",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemVerticalAlign": "middle",
  "right": "2.83%",
  "backgroundColorRatios": [
   0
  ],
  "verticalAlign": "top"
 }
], 
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "height": "100%",
 "class": "Player",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "existsKey": function(key){  return key in window; }
 },
 "vrPolyfillScale": 1,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "paddingTop": 0,
 "contentOpaque": false,
 "start": "this.syncPlaylists([this.ThumbnailList_90788D79_9F6D_8244_41C8_FBA7C497D624_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})