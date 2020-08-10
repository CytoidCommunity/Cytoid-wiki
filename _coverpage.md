<script>
    var pics = new Array("sayaka.jpg","palescreen.jpg");
    var picSize = 1;
    var picNow = 0;
    function randomNum(minNum,maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random()*minNum+1,10); 
            break; 
            case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
                default: 
                    return 0; 
                break; 
        } 
    } 
    function nextPic(){
        var picNext = randomNum(1,picSize);
        if (picNext>picSize)picNext = picNext - picNext;
        alert(picNext);
    }
    if (picsize != 0)setInterval('nextpPic()', 3000);
</script>
<img src="/./site-source/pic/cytoid-girl.png" data-origin="./site-source/pic/cytoid-girl.png" alt="logo" style="width:130px;">

# Cytoid <small> 2.0 </small>

> 由像你一样的玩家所制作的节奏游戏。

[GitHub](https://github.com/Cytoid/Cytoid)
[阅读wiki](#main)

<!-- background image -->

![](./site-source/pic/background.jpg)
