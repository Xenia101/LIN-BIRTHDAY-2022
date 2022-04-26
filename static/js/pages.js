var typed = new Typed('#typed', {
    strings: [
        '^1000\n안녕 난 준봉',
        '지금쯤 과거에 도착했을거야',
        '지금부터 모든 문제를 풀어',
        '상남자 에너지를 모아줘',
        '준뇨는 내가 잘 달래고 있을게',
        '그럼 행운을 빌어',
        '찡긋',
        ''
    ],
    typeSpeed: 95,
    showCursor: false,
});

$('#ok1').on('click', function () {
    var a = $('#a1').val();
    if (a) {
        if (a == '꼬북이') {
            alert('성공! 에너지를 획득합니다');

            location.href = '/2';
        } else {
            alert('정답이 아닙니다.');
            $('#a1').val('');
            $('#a1').focus();
        }
    } else {
        alert('입력값을 확인해주세요');
        $('#a1').val('');
        $('#a1').focus();
    }
});