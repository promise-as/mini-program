// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}, // 用户数据
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isAuth: false // 是否授权
  },

  toListPage(){
    // 点击跳转到list页面
    wx.navigateTo({
      url: '/pages/list/list'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 做一些初始化工作，发送请求，开启定时器
    console.log('onLoad 页面加载');
  },

  getUserInfo(){
    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        console.log(res, 1111)
        if (res.authSetting['scope.userInfo']) { // 授权
          this.setData({
            isAuth: true
          })
        }else{ // 没授权
          this.setData({
            isAuth: false
          })
        }
      }
    })
  },

  bindGetUserInfo (e) {
    // 判断用户是否点击授权按钮了
    if(e.detail.rawData){
      this.getUserInfo()
    }

    // 更新data里的userInfo数据
    this.setData({
      userInfo: e.detail.userInfo,
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