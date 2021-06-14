// 给qq绑定按钮

const btnqq = document.getElementsByClassName('btn-qq') //获取qq按钮
const container = document.getElementsByClassName("container")[0]; //获取整体容器
const btnclose = document.getElementById("btn-close"); //获取关闭按钮
const btnwx = document.getElementsByClassName('btn-wx') //获取微信按钮
const heroName = document.getElementsByClassName("heroName")[0]; //获取英雄名称
const area = document.getElementsByClassName("area")[0];    //获取地区
const areaPower = document.getElementsByClassName("areaPower")[0]; //获取地区排名
const city = document.getElementsByClassName("city")[0];    //获取城市
const cityPower = document.getElementsByClassName("cityPower")[0]; //获取城市排名
const province = document.getElementsByClassName("province")[0]; //获取省
const provincePower = document.getElementsByClassName("provincePower")[0]; //获取省排名
const updatetime = document.getElementsByClassName("updatetime")[0]; //获取更新时间
const typistname = document.getElementsByClassName('info-name-tpist')[0] //获取类型 qq区或微信区

const hero = document.getElementsByClassName('name') //获取英雄名字

 

btnclose.addEventListener("click", () => {
    toggleClass(container, "contain-none");
  });

//点击查询qq区
// 默认显示

 //点击查询微信区

 for(var j=0; j<btnwx.length;j++){
    // 为每个微信按钮添加一个num属性
    btnwx[j].num = j
    // 为按钮绑定单击响应函数
    btnwx[j].onclick = function(){
        
        var index = this.num
        // alert(hero[index].innerHTML)
        var typist = 'wx'
    axios
    .get("http://api.vopipi.cn/api/select", {
      params: {
        name: hero[index].innerHTML,
        type: typist
      },
    })
    .then((response) => {
      // console.log(response)
      var json = response.data[0].data
      // console.log(json);
      typistname.innerHTML = typist + '区'
      heroName.innerHTML = json.heroName;
      area.innerHTML = json.area;
      areaPower.innerHTML = json.areaPower;
      city.innerHTML = json.city;
      cityPower.innerHTML = json.cityPower;
      province.innerHTML = json.province;
      provincePower.innerHTML = json.provincePower;
      updatetime.innerHTML = json.updatetime;
    });
  toggleClass(container, "contain-none");
}
  }
//点击查询qq区显示对应的英雄

// 为所有的按钮绑定单击响应
for(var i=0; i<btnqq.length;i++){
    //为每个qq按钮添加一个num属性
    btnqq[i].num = i
    //为按钮绑定单击响应函数
    btnqq[i].onclick = function(){
        // alert(this.num)

        var index = this.num
        // alert(hero[index].innerHTML)
        var typist = 'qq'
        axios
        .get("http://api.vopipi.cn/api/select", {
          params: {
            name: hero[index].innerHTML,
            type: typist
          },
        })
        .then((response) => {
          // console.log(response)
          var json = response.data[0].data
          // console.log(json);
          typistname.innerHTML = typist + '区'
          heroName.innerHTML = json.heroName;
          area.innerHTML = json.area;
          areaPower.innerHTML = json.areaPower;
          city.innerHTML = json.city;
          cityPower.innerHTML = json.cityPower;
          province.innerHTML = json.province;
          provincePower.innerHTML = json.provincePower;
          updatetime.innerHTML = json.updatetime;
        });
      toggleClass(container, "contain-none");

}
}


 //增加搜索功能
 const searchbtn = document.getElementById('search-btn')
 const input = document.getElementById('search-box')
 
 
//判断英雄名称是否输入正确

//遍历创建英雄数组

var Hero =[]
for(var k=0;k < hero.length;k++){
  hero[k].nub = k
  Hero.push(hero[k].innerHTML)
}

//  console.log(Hero)
  searchbtn.onclick = function () {
    

    const input = document.getElementById('search-box')
    // isnull(input.value)
    // console.log(Hero.indexOf(input.value))
    if(Hero.indexOf(input.value)>= 0){
    //获取 select 标签id
    

    
    
    var sel=document.getElementById('selectbox');
    //selectedIndex 属性可设置或返回下拉列表中被选选项的索引号。若允许多重选择，则仅会返回第一个被选选项的索引号。
    var sid=sel.selectedIndex;
    //所以sid为索引号，sel[0]为第一个option sel[1]为第二个option，则sel[sid].value为option的value值

    var typist = sel[sid].value
    
    //获取输入框的文本内容
    var name = input.value;
   axios
     .get("http://api.vopipi.cn/api/select", {
       params: {
         name: name,
         type: typist
       },
     })
     .then((response) => {
      //  console.log(response)
       var json = response.data[0].data
      //  console.log(json);
       typistname.innerHTML = typist + '区'
       heroName.innerHTML = json.heroName;
       area.innerHTML = json.area;
       areaPower.innerHTML = json.areaPower;
       city.innerHTML = json.city;
       cityPower.innerHTML = json.cityPower;
       province.innerHTML = json.province;
       provincePower.innerHTML = json.provincePower;
       updatetime.innerHTML = json.updatetime;
     });
   toggleClass(container, "contain-none");
    }else{
      alert('请输入正确的英雄名称')
    }
    }
    



 
 

 
