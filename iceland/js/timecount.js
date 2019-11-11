function timedCount() 
    {
        //di作为一个变量传进来
        //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
        var dateBegin = new Date('2012/08/21 06:30:00')
        var dateEnd = new Date();//获取当前时间
        var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
        var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
        var leave1=dateDiff%(24*3600*1000)    //计算天数后剩余的毫秒数
        var hours=Math.floor(leave1/(3600*1000))//计算出小时数
        hours = hours < 10 ? "0" + hours : hours; 
        //计算相差分钟数
        var leave2=leave1%(3600*1000)    //计算小时数后剩余的毫秒数
        var minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
        minutes = minutes < 10 ? "0" + minutes : minutes; 
        //计算相差秒数
        var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
        var seconds=Math.round(leave3/1000)
        seconds = seconds < 10 ? "0" + seconds : seconds;
        var sen = dayDiff+" 天 "+hours+" 时 "+minutes+" 分 "+seconds+" 秒 "

        document.getElementById('timer').innerHTML = sen
        t=setTimeout("timedCount()",1000)
    }