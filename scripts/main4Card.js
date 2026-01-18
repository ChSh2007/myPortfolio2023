$(document).ready(function(){
    $('.main4_content_block2_block3-block2').click(function(event){
        $('.main4_content_block2_block3-block2').toggleClass('active');
        $('.main4_content_block2_block3-block1').toggleClass('active');
        $('.main4_p1').html('Связь');
        $('.main4_p2').html('Чтобы связаться со мной, просто кликните на любую иконку соц-сетей, которыми я пользуюсь.');
    });
    $('.main4_content_block2_block3-block1').click(function(event){
        $('.main4_content_block2_block3-block2').removeClass('active');
        $('.main4_content_block2_block3-block1').removeClass('active');
        $('.main4_p1').html('Немного обо мне:');
        $('.main4_p2').html('Начал изучать frontend разработку сайтов в 15 лет. Во время обучения у меня было много практики. Я старался верстать сложные и непонятные для меня Psd шаблоны. Также в процессе обучения я обращал особое внимание на адаптацию и архитектуру сайта. Сейчас мне 18, и ни один psd шаблон не вызывает у меня трудностей.');
    });
})