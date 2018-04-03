'use strict'
var daogsr = {
    signScroll: 0,
    isMobile: /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),
    header: document.getElementById('header'),
    init() {
        this.animateInit()
        this.navHover()
        this.setIndexHeaderClass()
        this.bannerVideo()
        this.subnavDropdown()
    },
    bannerVideo() {
        var video = document.getElementById('banner-video') ? document.getElementById('banner-video') : null
        if (video !== null) {
            video.muted = true
        }

    },
    subnavDropdown() {
        $('#cp').hover(function() {
            $(this).find('.dropdown-first-list').slideDown()
        }, function() {
            $(this).find('.dropdown-first-list').slideUp()
        })
    },
    setIndexHeaderClass() {
        this.header.className = window.location.pathname === '/' ? 'header-in-banner' : ''
    },
    navAnimate() {
        var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop
        var bannerHeight = document.querySelector(".banner") ? document.querySelector(".banner").clientHeight : null
        if (docScrollTop > this.signScroll) {
            this.signScroll = docScrollTop
            this.header.className = bannerHeight !== null && docScrollTop < bannerHeight ? 'header-close header-in-banner' : 'header-close'
        } else {
            this.signScroll = docScrollTop
            this.header.className = bannerHeight !== null && docScrollTop < bannerHeight ? 'header-oprn header-in-banner' : 'header-oprn'
        }
    },
    navHover() {
        var that = this
        if (that.isMobile) {
            $('.nav-button').on('click', function() {
                $('.nav>ul').toggleClass('dis-block')
                $('.lang').toggleClass('dis-block')
                $(this).toggleClass('active')
                $('body').toggleClass('menu-open')
            })
        } else {
            var bannerHeight = document.querySelector(".banner") ? document.querySelector(".banner").clientHeight : null
            that.header.onmouseover = function() {
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop
                that.header.className = bannerHeight !== null && scrollY < bannerHeight ? 'active header-in-banner' : 'active'
            }
            that.header.onmouseout = function() {
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop
                that.header.className = bannerHeight !== null && scrollY < bannerHeight ? 'inactive header-in-banner' : 'inactive'
            }
        }
        /*document.addEventListener ('mousemove', function(){
        	var e=e||window.event;
            var y=e.clientY
            that.header.className = y < 65 && y > 0 ? 'active' : 'header-close'
        }, false);*/
    },
    animateInit() {
        var that = this
        document.addEventListener('scroll', function(e) {
            that.navAnimate()
        })
    }
}

$(document).ready(function() {
    (function() {
        daogsr.init()
    })()
});