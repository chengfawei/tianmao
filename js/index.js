window.onload = function () {
    f2();
    f1();
    f();
};
/*分类导航*/
function f() {
    var cgTab = document.getElementById('cg-tab');
    var cgDetail = document.getElementById('cg-detail');
    var navItems = cgTab.getElementsByClassName('nav-item');
    var icons = cgTab.getElementsByClassName('nav-item-icon');
    var details = cgDetail.getElementsByClassName('detail');

  for (var i=0;i<navItems.length;i++){
      //是否是第一次mouseover至navItems[i]
      navItems[i].isFirst = true;
      (function (i) {
          var links=getByName(navItems[i],'a');
          navItems[i].addEventListener("mouseover",function () {
              var color = navItems[i].getAttribute('data-color');
              toggle('block',color,'#fff');
          });

          navItems[i].addEventListener("mouseout",function () {
              toggle('none','#000','rgb(238, 238, 238)');
          });

          details[i].addEventListener("mouseover",function () {
              toggle('block');
          });
          details[i].addEventListener("mouseout",function () {
              toggle('none');
          });
          function toggle(display,color,bg) {
              cgDetail.style.display=display;
              details[i].style.display=display;
              icons[i].style.color=color;
              for (var j=0;j<links.length;j++){
                  links[j].style.color=color;
              }
              navItems[i].style.background=bg;
          }
      })(i)
  }
};
/*分类导航*/


// Banner部分开始
//====================================
function f1() {
    var oBanner = document.getElementById('banner');
    var bannerBgs = oBanner.getElementsByClassName('banner-bg');
    var oSlider = oBanner.getElementsByClassName('slider-nav')[0];
    var sliders = oSlider.getElementsByTagName('li');
    var oLastBg = bannerBgs[0];
    var oLastSd = sliders[0];
    var iLen = bannerBgs.length;
    var iNum = 0;
    var timer = null;

    //焦点图自动播放
    autoPlay();
    oBanner.onmouseover = function () {
        clearInterval(timer);
    };
    oBanner.onmouseout = function () {
        autoPlay();
    };

    //轮播索引的mouseover
    oSlider.addEventListener('mouseover', function (ev) {
        var ev = ev || event;
        var target = ev.target || ev.srcElement;
        for (var i = 0; i < iLen; i++) {
            if (sliders[i] === target) {
                iNum = i;
                change();
            }
        }
    });

    //自动播放函数
    function autoPlay() {
        clearInterval(timer);
        timer = setInterval(function () {
            iNum++;
            if (iNum === iLen) {
                iNum = 0;
            }
            change();
        }, 3000);
    }

    //banner轮播切换函数
    function change() {
        oLastBg.style.display = 'none';
        oLastSd.className = '';
        bannerBgs[iNum].style.display = 'block';
        sliders[iNum].className = 'active';
        oLastBg = bannerBgs[iNum];
        oLastSd = sliders[iNum];
    }
}




/**
 * 通过tagName获取DOM节点
 *
 * @param      {object}  parent     父级对象
 * @param      {string}  tagname    标签名
 * @return     {object}   获取到的节点NodeList对象.
 */
function getByName(parent, tagname) {
    return parent.getElementsByTagName(tagname);
}
