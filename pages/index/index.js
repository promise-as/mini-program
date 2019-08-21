// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '全职高手',
    userInfo: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  handleParent(){ // 对象简写
    // console.log('父元素');
  },

  handleChild(){ // 对象简写
    // console.log('子元素');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 做一些初始化工作，发送请求，开启定时器
    // console.log('onLoad 页面加载');

    // 查看是否授权
    wx.getSetting({
      success (res){
        console.log(res, 1111)
        if (res.authSetting['scope.userInfo']) {
          console.log(222)
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo, 333)
            }
          })
        }
      }
    })
  },

  bindGetUserInfo (e) {
    console.log(e.detail.userInfo, 4444)

    this.setData({
      userInfo: e.detail.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady 页面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow 页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})