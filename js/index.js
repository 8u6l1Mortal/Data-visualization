$(function () {
    //------监控区域模块制作--------
    (function () {
        // 1-给a注册单击事件
        $('.monitor .tabs a').on('click', function () {
            // 排他1（样式）
            $(this).addClass('active').siblings().removeClass('active');
            // 排他2（div显示隐藏）
            var index = $(this).index();
            $('.monitor .content').eq(index).show();
            $('.monitor .content').eq(index).siblings('.content').hide();
        });
        // 2-把每个marquee盒子中的内容复制一份，添加到自身里面
        $('.marquee-view .marquee').each(function () {
            // $(this) 当前被遍历到的元素对象
            // 克隆row
            var rows = $(this).children().clone();
            // 添加到marquee里面
            $(this).append(rows);
        });
    })();

    //------点位分布统计--------
    (function () {
        let myCharts = echarts.init(document.querySelector(".pie"))
        let option = {
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '点位分布',
                    type: 'pie',
                    //通过半径改大小
                    radius: ['10%', '70%'],
                    //通过圆心点改位置
                    center: ['50%', '50%'],
                    //显示模式
                    roseType: 'radius',
                    itemStyle: {
                        borderRadius: 5
                    },
                    //文本标签的字体大小
                    label: {
                        fontSize: 10,
                    },
                    //文本引导线的长度
                    labelLine: {
                        length: 6,
                        length2: 8,
                    },
                    data: [
                        { value: 20, name: "云南" },
                        { value: 26, name: "北京" },
                        { value: 24, name: "山东" },
                        { value: 25, name: "河北" },
                        { value: 20, name: "江苏" },
                        { value: 25, name: "浙江" },
                        { value: 30, name: "四川" },
                        { value: 42, name: "湖北" }
                    ],
                }
            ]
        };
        myCharts.setOption(option)
        //最后一步：window窗户变化，饼状图跟着变换
        window.addEventListener("resize", function () {
            //只要窗口发生变化大小，图标跟着变化大小
            myCharts.resize()
        })
    })();

    //------用户统计模块--------
    (function () {
        let myCharts = echarts.init(document.querySelector(".bar"));
        // 设置柱子的单独样式
        let item = {
            name: '',
            value: 1200,
            //柱子的颜色
            itemStyle: {
                color: '#254065'
            },
            //高亮的颜色
            emphasis: {
                color: '#254065'
            },
            //单独设置提示框
            tooltip: {
                // show: false, 第一种方式
                extraCssText: 'opacity:0;'
            },
        }
        let option = {
            // 修改线性渐变色方式 1
            color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' }  // 1 结束颜色
                ]
            ),
            // 提示框
            tooltip: {
                // 触发类型 item:柱形图
                trigger: 'item',
                // // 指示器 
                // axisPointer: {
                //     // line 指示器，shadow阴影指示器
                //     type: 'shadow'
                // }
            },
            // 网格
            grid: {
                left: '0%',
                right: '3%',
                bottom: '3%',
                top: '3%',
                // 如果网格溢出盒子，是否显示文字
                containLabel: true,
                //grid 四条边框的颜色
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },
            xAxis: [
                {
                    // 轴的类型，value数值轴，category类目轴
                    type: 'category',
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    // 刻度短线
                    axisTick: {
                        // 刻度线是否显示
                        show: false,
                        // true意思：图形和刻度居中中间
                        // false意思：图形在刻度之间
                        alignWithLabel: false,
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                            // width:8,  x轴线的粗细
                            // opcity: 0,   如果不想显示x轴线 则改为 0
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    // 轴线 ,是否显示
                    axisLine: {
                        show: true,
                    },
                    // 刻度
                    axisTick: {
                        show: false, // 刻度线是否显示
                    },
                    // 刻度标签
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    // y轴 分割线的样式 
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    },
                }
            ],
            // 系列
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    // 柱子的宽度
                    barWidth: '60%',
                    // 数据
                    data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
                }
            ]
        };
        myCharts.setOption(option)
        //最后一步：window窗户变化，饼状图跟着变换
        window.addEventListener("resize", function () {
            //只要窗口发生变化大小，图标跟着变化大小
            myCharts.resize()
        })
    })();

    //------销售统计模块--------
    (function () {
        // 首先：准备数据，使用数据
        let data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        let myCharts = echarts.init(document.querySelector(".line"))
        let option = {
            color: ['#00f2f1', '#ed3f35'],//两条线的颜色
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['预期销售额', '实际销售额'],
                // 图列的文本颜色更改
                textStyle: {
                    color: '#4c9bfd'
                },
                // 图例的位置距离最左侧10%
                right: '10%',
            },
            grid: {
                // 网格位置的大小
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: "#012f4a",
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                // 刻度
                axisTick: {
                    show: false,//不显示
                },
                // 刻度标签
                axisLabel: {
                    color: "#4c9bfd",//颜色更改
                    fontSize: 8,
                },
                // 轴线
                axisLine: {
                    show: false,//X轴线，不显示
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,//刻度
                },
                axisLabel: {
                    color: '#4c9bfd',//刻度标签
                },
                axisLine: {
                    show: false,//轴线
                },
                splitLine: {//分割线
                    lineStyle: {
                        color: '#012f4a' // 分割线颜色
                    }
                },
            },
            series: [
                {
                    name: '预期销售额',
                    type: 'line',
                    stack: 'Total1',//数据堆叠，不需要
                    smooth: true,//数据是否平滑显示
                    data: data['year'][0]
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    data: data['year'][1]
                },
            ]
        };
        myCharts.setOption(option)
        window.addEventListener("resize", function () {
            myCharts.resize()
        })

        let index = 0
        // 其次：单机按钮，切换图标
        $(".sales .caption a").on("click", function () {
            // 获取当前这个a的索引号，且为了同步，所以现在的a是0,1,2,3
            index = $(this).index() - 1
            //01.高亮效果
            $(this).addClass("active").siblings("a").removeClass("active")

            //02.获取按钮，获取对应的数据
            let num = $(this).attr("data-type")
            let lineDate = data[num]
            //03.更改option里面series中的图表数据
            option.series[0].data = lineDate[0]
            option.series[1].data = lineDate[1]
            //04.重新设置配置项，生成新的图表
            myCharts.setOption(option)
        })
        //05.定时器
        let timer = null
        timer = setInterval(function () {
            index++;//index是全局变量，通过索引号++,实行点击事件
            if (index >= 4) {
                index = 0
            }
            $(".sales .caption a").eq(index).click()
        }, 2000)

        $(".sales").hover(function () {
            clearInterval(timer)
        }, function () {
            clearInterval(timer)
            timer = setInterval(function () {
                index++;
                if (index >= 4) {
                    index = 0
                }
                $(".sales .caption a").eq(index).click()
            }, 2000)
        })


    })();

    //------渠道分布模块--------
    (function () {
        let myCharts = echarts.init(document.querySelector(".radar"))

        let option = {
            // 雷达图这个dom元素的背景颜色
            // backgroundColor: '#161627',
            radar: {
                // 设置半径
                radius: '65%',
                // 设置位置
                center: ['50%', '50%'],
                indicator: [
                    { name: '机场', max: 100 },
                    { name: '商场', max: 100 },
                    { name: '火车站', max: 100 },
                    { name: '汽车站', max: 100 },
                    { name: '地铁', max: 100 }
                ],
                shape: 'circle',
                // 设置4圈雷达
                splitNumber: 4,
                axisName: {
                    color: 'rgb(238, 197, 102)'
                },
                // 文字的颜色
                name: {
                    textStyle: {
                        color: '#4c9bfd'
                    }
                },
                // 设置分割线的外表样式
                splitLine: {
                    lineStyle: {
                        // 里面的颜色是半透明色
                        color: [
                            'rgba(255, 255, 255, 0.5)',
                        ]
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.5)"
                    }
                }
            },
            series: [
                {
                    name: 'Beijing',
                    //雷达图 组件
                    type: 'radar',
                    // 线条的样式
                    lineStyle: {
                        width: 1,
                        opacity: 0.5
                        // color: "#fff"
                    },
                    data: [[90, 19, 56, 11, 34]],
                    // 标记的原点，显示出来
                    symbol: 'circle',
                    // 标记图形的大小
                    symbolSize: 5,
                    // 拐点的样式
                    itemStyle: {
                        color: '#fff'
                    },
                    // 图形上的文字
                    label: {
                        show: true,
                        fontSize: 10,
                    },
                    areaStyle: {
                        color: 'skyblue'
                    },

                }
            ],
            tooltip: {
                show: true,
                position: ["60%", '10%']
            }
        };
        myCharts.setOption(option)
        window.addEventListener('resize', function () {
            myCharts.resize()
        })
    })();

    //------季度销售模块--------
    (function () {
        let myCharts = echarts.init(document.querySelector(".gauge"))
        let option = {
            series: [
                {
                    name: '销售进度',
                    type: 'pie',
                    // 半径大小
                    radius: ['130%', '150%'],
                    // 饼图位置
                    center: ["50%", "80%"],
                    // 取消hover的高亮偏离距离
                    hoverOffset: 0,
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    // 分饼的起始角度
                    startAngle: 180,
                    data: [
                        {
                            value: 100,
                            itemStyle: {
                                // 颜色渐变#00c9e0->#005fc1
                                color: new echarts.graphic.LinearGradient(
                                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                        { offset: 1, color: "#005fc1" } // 1 结束颜色
                                    ]
                                )
                            }
                        },
                        { value: 100, itemStyle: { color: '#12274d' } }, // 颜色
                        {
                            value: 200,
                            itemStyle: {
                                color: "transparent"
                            }
                        },
                    ]
                }
            ]
        };
        myCharts.setOption(option)
        window.addEventListener("resize", function () {
            myCharts.resize()
        })
    }());

    //------订单统计tab栏--------
    (function () {
        // 1. 准备数据
        let data = {
            day365: { orders: '20,301,987', amount: '99834' },
            day90: { orders: '301,987', amount: '9834' },
            day30: { orders: '1,987', amount: '3834' },
            day1: { orders: '987', amount: '834' }
        }

        let index = 0
        let order = $(".order").eq(0)
        // console.log(order);
        // 点击切换高亮
        $(".order .filter a").on("click", function () {
            $(this).addClass("active").siblings().removeClass('active')
        })
    })();

    //-------全国热榜模块---------
    (function () {
        //第一步准备数据
        var hotData = [
            {
                city: '北京',  // 城市
                sales: '25, 179',  // 销售额
                flag: true, //  上升还是下降
                brands: [   //  品牌种类数据
                    { name: '可爱多', num: '9,086', flag: true },
                    { name: '娃哈哈', num: '8,341', flag: true },
                    { name: '喜之郎', num: '7,407', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '6,724', flag: false },
                    { name: '好多鱼', num: '2,170', flag: true },
                ]
            },
            {
                city: '河北',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '3,457', flag: false },
                    { name: '娃哈哈', num: '2,124', flag: true },
                    { name: '喜之郎', num: '8,907', flag: false },
                    { name: '八喜', num: '6,080', flag: true },
                    { name: '小洋人', num: '1,724', flag: false },
                    { name: '好多鱼', num: '1,170', flag: false },
                ]
            },
            {
                city: '上海',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '2,345', flag: true },
                    { name: '娃哈哈', num: '7,109', flag: true },
                    { name: '喜之郎', num: '3,701', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '2,724', flag: false },
                    { name: '好多鱼', num: '2,998', flag: true },
                ]
            },
            {
                city: '江苏',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '2,156', flag: false },
                    { name: '娃哈哈', num: '2,456', flag: true },
                    { name: '喜之郎', num: '9,737', flag: true },
                    { name: '八喜', num: '2,080', flag: true },
                    { name: '小洋人', num: '8,724', flag: true },
                    { name: '好多鱼', num: '1,770', flag: false },
                ]
            },
            {
                city: '山东',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '9,567', flag: true },
                    { name: '娃哈哈', num: '2,345', flag: false },
                    { name: '喜之郎', num: '9,037', flag: false },
                    { name: '八喜', num: '1,080', flag: true },
                    { name: '小洋人', num: '4,724', flag: false },
                    { name: '好多鱼', num: '9,999', flag: true },
                ]
            }
        ]

        //第二步渲染数据到页面
        //1.准备两个数据，第一个用于存放所有的lis元素，第二步用于创建元素
        //2.依次动态放入每一个Lis元素，
        //3.根据flag的值和三元表达式的特点，如果cityobj.flag是true就icon-up，否则就放icon-down
        let subhtml = ``
        hotData.forEach((cityobj, index, arr) => {
            // console.log(cityobj);
            let li = `
            <li>
                <span>${cityobj.city}</span>
                <span>
                ${cityobj.sales}
                <s class="${cityobj.flag ? 'icon-up' : "icon-down"}"></s>
                </span>
            </li>
            `
            subhtml += li
            $(".province .sup").html(subhtml)
        })

        let indexs = 0

        // 封装了高亮和对应渲染商品数据到页面中
        const render = (li) => {
            li.addClass("active").siblings().removeClass("active")

            //获取当前这个市的商品品牌数据。先获取索引号，再用索引号取出数据
            let index = li.index()
            // console.log(hotData[index].brands);
            let brands = hotData[index].brands

            // 第二次渲染，渲染具体的商品数据
            let brandhtml = ``
            brands.forEach((brandObj) => {
                let li = `
                <li>
                    <span>${brandObj.name}</span>
                    <span>
                        ${brandObj.num}
                    <s class="${brandObj.flag ? 'icon-up' : 'icon-down'}">
                    </s>
                    </span>
                </li>
                `
                brandhtml += li
                $(".panel .sub").html(brandhtml)
            })
        }
        // 渲染结束，添加鼠标移入li事件
        $(".inner .sup").on("mouseover", "li", function () {
            indexs = $(this).index()
            // 传入的是当前这个li
            let li = $(this)
            render(li)
        })

        // 默认显示第一个数据
        // $(".inner .sup li:first").mouseover()
        render($(".inner .sup li:first"))

        // 自动播放功能
        let timer = null
        timer = setInterval(function () {
            indexs++;
            if (indexs >= hotData.length) {
                indexs = 0
            }
            // $(".inner .sup li").eq(indexs).mouseover()
            // 传入的是当前这个li元素
            let li = $(".inner .sup li").eq(indexs)
            render(li)

        }, 2000)

        $(".top").hover(function () {
            clearInterval(timer)
        }, function () {
            clearInterval(timer)
            timer = setInterval(function () {
                indexs++;
                if (indexs >= hotData.length) {
                    indexs = 0
                }
                // $(".inner .sup li").eq(indexs).mouseover()
                // 传入的是当前这个li元素
                let li = $(".inner .sup li").eq(indexs)
                render(li)

            }, 2000)
        })


    })();


    (function () {
        let myCharts = echarts.init(document.querySelector(".geo"))
        var geoCoordMap = {
            上海: [121.4648, 31.2891],
            东莞: [113.8953, 22.901],
            东营: [118.7073, 37.5513],
            中山: [113.4229, 22.478],
            临汾: [111.4783, 36.1615],
            临沂: [118.3118, 35.2936],
            丹东: [124.541, 40.4242],
            丽水: [119.5642, 28.1854],
            乌鲁木齐: [87.9236, 43.5883],
            佛山: [112.8955, 23.1097],
            保定: [115.0488, 39.0948],
            兰州: [103.5901, 36.3043],
            包头: [110.3467, 41.4899],
            北京: [116.4551, 40.2539],
            北海: [109.314, 21.6211],
            南京: [118.8062, 31.9208],
            南宁: [108.479, 23.1152],
            南昌: [116.0046, 28.6633],
            南通: [121.1023, 32.1625],
            厦门: [118.1689, 24.6478],
            台州: [121.1353, 28.6688],
            合肥: [117.29, 32.0581],
            呼和浩特: [111.4124, 40.4901],
            咸阳: [108.4131, 34.8706],
            哈尔滨: [127.9688, 45.368],
            唐山: [118.4766, 39.6826],
            嘉兴: [120.9155, 30.6354],
            大同: [113.7854, 39.8035],
            大连: [122.2229, 39.4409],
            天津: [117.4219, 39.4189],
            太原: [112.3352, 37.9413],
            威海: [121.9482, 37.1393],
            宁波: [121.5967, 29.6466],
            宝鸡: [107.1826, 34.3433],
            宿迁: [118.5535, 33.7775],
            常州: [119.4543, 31.5582],
            广州: [113.5107, 23.2196],
            廊坊: [116.521, 39.0509],
            延安: [109.1052, 36.4252],
            张家口: [115.1477, 40.8527],
            徐州: [117.5208, 34.3268],
            德州: [116.6858, 37.2107],
            惠州: [114.6204, 23.1647],
            成都: [103.9526, 30.7617],
            扬州: [119.4653, 32.8162],
            承德: [117.5757, 41.4075],
            拉萨: [91.1865, 30.1465],
            无锡: [120.3442, 31.5527],
            日照: [119.2786, 35.5023],
            昆明: [102.9199, 25.4663],
            杭州: [119.5313, 29.8773],
            枣庄: [117.323, 34.8926],
            柳州: [109.3799, 24.9774],
            株洲: [113.5327, 27.0319],
            武汉: [114.3896, 30.6628],
            汕头: [117.1692, 23.3405],
            江门: [112.6318, 22.1484],
            沈阳: [123.1238, 42.1216],
            沧州: [116.8286, 38.2104],
            河源: [114.917, 23.9722],
            泉州: [118.3228, 25.1147],
            泰安: [117.0264, 36.0516],
            泰州: [120.0586, 32.5525],
            济南: [117.1582, 36.8701],
            济宁: [116.8286, 35.3375],
            海口: [110.3893, 19.8516],
            淄博: [118.0371, 36.6064],
            淮安: [118.927, 33.4039],
            深圳: [114.5435, 22.5439],
            清远: [112.9175, 24.3292],
            温州: [120.498, 27.8119],
            渭南: [109.7864, 35.0299],
            湖州: [119.8608, 30.7782],
            湘潭: [112.5439, 27.7075],
            滨州: [117.8174, 37.4963],
            潍坊: [119.0918, 36.524],
            烟台: [120.7397, 37.5128],
            玉溪: [101.9312, 23.8898],
            珠海: [113.7305, 22.1155],
            盐城: [120.2234, 33.5577],
            盘锦: [121.9482, 41.0449],
            石家庄: [114.4995, 38.1006],
            福州: [119.4543, 25.9222],
            秦皇岛: [119.2126, 40.0232],
            绍兴: [120.564, 29.7565],
            聊城: [115.9167, 36.4032],
            肇庆: [112.1265, 23.5822],
            舟山: [122.2559, 30.2234],
            苏州: [120.6519, 31.3989],
            莱芜: [117.6526, 36.2714],
            菏泽: [115.6201, 35.2057],
            营口: [122.4316, 40.4297],
            葫芦岛: [120.1575, 40.578],
            衡水: [115.8838, 37.7161],
            衢州: [118.6853, 28.8666],
            西宁: [101.4038, 36.8207],
            西安: [109.1162, 34.2004],
            贵阳: [106.6992, 26.7682],
            连云港: [119.1248, 34.552],
            邢台: [114.8071, 37.2821],
            邯郸: [114.4775, 36.535],
            郑州: [113.4668, 34.6234],
            鄂尔多斯: [108.9734, 39.2487],
            重庆: [107.7539, 30.1904],
            金华: [120.0037, 29.1028],
            铜川: [109.0393, 35.1947],
            银川: [106.3586, 38.1775],
            镇江: [119.4763, 31.9702],
            长春: [125.8154, 44.2584],
            长沙: [113.0823, 28.2568],
            长治: [112.8625, 36.4746],
            阳泉: [113.4778, 38.0951],
            青岛: [120.4651, 36.3373],
            韶关: [113.7964, 24.7028]
        };
        var XAData = [
            [{ name: "西安" }, { name: "拉萨", value: 100 }],
            [{ name: "西安" }, { name: "上海", value: 100 }],
            [{ name: "西安" }, { name: "广州", value: 100 }],
            [{ name: "西安" }, { name: "西宁", value: 100 }],
            [{ name: "西安" }, { name: "银川", value: 100 }]
        ];

        var XNData = [
            [{ name: "西宁" }, { name: "北京", value: 100 }],
            [{ name: "西宁" }, { name: "上海", value: 100 }],
            [{ name: "西宁" }, { name: "广州", value: 100 }],
            [{ name: "西宁" }, { name: "西安", value: 100 }],
            [{ name: "西宁" }, { name: "银川", value: 100 }]
        ];

        var YCData = [
            [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
            [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
            [{ name: "银川" }, { name: "上海", value: 100 }],
            [{ name: "银川" }, { name: "西安", value: 100 }],
            [{ name: "银川" }, { name: "西宁", value: 100 }]
        ];
        var planePath =
            "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];

                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord],
                        value: dataItem[1].value
                    });
                }
            }
            return res;
        };
        var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
        var series = [];
        [
            ["西安", XAData],
            ["西宁", XNData],
            ["银川", YCData]
        ].forEach(function (item, i) {
            series.push(
                {
                    name: item[0] + " Top3",
                    type: "lines",
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: "red", //arrow箭头的颜色
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + " Top3",
                    type: "lines",
                    zlevel: 2,
                    symbol: ["none", "arrow"],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + " Top3",
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    rippleEffect: {
                        brushType: "stroke"
                    },
                    label: {
                        normal: {
                            show: true,
                            position: "right",
                            formatter: "{b}"
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        },
                        emphasis: {
                            areaColor: "#2B91B7"
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                }
            );
        });
        var option = {
            tooltip: {
                trigger: "item",
                formatter: function (params, ticket, callback) {
                    if (params.seriesType == "effectScatter") {
                        return "线路：" + params.data.name + "" + params.data.value[2];
                    } else if (params.seriesType == "lines") {
                        return (
                            params.data.fromName +
                            ">" +
                            params.data.toName +
                            "<br />" +
                            params.data.value
                        );
                    } else {
                        return params.name;
                    }
                }
            },
            geo: {
                map: "china",
                label: {
                    emphasis: {
                        show: true,
                        color: "#fff"
                    }
                },
                // 把中国地图放大了1.2倍
                zoom: 1.2,
                roam: true,
                itemStyle: {
                    normal: {
                        // 地图省份的背景颜色
                        areaColor: "rgba(20, 41, 87,0.6)",
                        borderColor: "#195BB9",
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                }
            },
            series: series
        };
        myCharts.setOption(option)
        window.addEventListener("resize", function () {
            myCharts.resize()
        })

    })();
})