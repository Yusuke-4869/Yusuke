$('#btn1').on('click', function(){
    const randomNum = Math.ceil(Math.random() * 2);

    let result ='';
    if(randomNum === 1){
        result = '<video controls autoplay><source src="file:///C:/Users/yusuke/Downloads/678465068.557011.mp4"></video>';
    }else{
        result = '<video controls autoplay><source src="file:///C:/Users/yusuke/Downloads/678463797.844105.mp4"></video>';
    }
    $('#result').html(result);
});

$('#btn2').on('click', function(){
    const randomNum = Math.ceil(Math.random() * 100);

    let result ='';
    if(randomNum <= 49){
        result = '<video controls autoplay><source src="file:///C:/Users/yusuke/Downloads/678465226.529350.mp4"></video>';
    }else if(randomNum >= 49 && randomNum <= 99){
        result = '<video controls autoplay><source src="file:///C:/Users/yusuke/Downloads/678463442.157654.mp4"></video>';
    }else{
        result = '<video controls autoplay><source src="file:///C:/Users/yusuke/Downloads/678478374.469884.mp4"></video>';
    }
    $('#result').html(result);
});

$('#btn3').on('click', function(){
    const randomNum = Math.ceil(Math.random() * 2);

    let result ='';
    if(randomNum === 1){
        result = '<video controls autoplay><source src="file:///C:/Users/yusuke/Downloads/678465353.342283.mp4"></video>';
    }else{
        result = '<video controls autoplay><source src="file:///C:/Users/yusuke/Downloads/678464004.998353.mp4"></video>';
    }
    $('#result').html(result);
});

$("#btn").on("click", function () {
    $('#music')[0].play ();
});