// pages/subpage1/index.js
Page({
  takePhoto:function(){
    wx.showActionSheet({
      itemList: ['从手机相册选择', '拍照'],
      success: function (res) {
        console.log(res.tapIndex)
        getCurrentPages()[0].selectPic(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  selectPic: function (tapIndex) {
    var sourceTypes = ['album', 'camera']
    var sourceType=[sourceTypes[tapIndex]]
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:sourceType,
      success:function(res){
        getCurrentPages()[0].setData({
          imgSrc: res.tempFilePaths,
          hasImg: true
        })
      },
      fail:function(res){
        console.log(res.errMsg)
      }
    })

  },
  measureDensity:function(){
    if(!this.data.hasImg){
      wx.showToast({
        title: '请先选择一张图片',
        icon: 'none',
        duration: 1000
      })
    }
    else{
      wx.showLoading({
        title: '测量中',
      })

      setTimeout(function () {
        getCurrentPages()[0].setData({
          densityDisplay: true,
          density: 50
        })
        wx.hideLoading()
      }, 1500)

    }

  },
  /**
   * Page initial data
   */
  data: {
    imgSrc:"",
    hasImg:false,
    densityDisplay:false,
    density:0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})