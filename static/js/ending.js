// ending.js

var typed = new Typed('#typed', {
    strings: [
        '^2000\n하뇨! 돌아왔구나',
        //    '상남자 에너지는 잘 가져 왔겠지?^1000',
        //    '이제 준뇨는 상남자가 됐어 ! !^1000',
        //    '당분간 준뇨는 회복이 필요해^1000',
        //    '하린이 떠나기 전에',
        //    '준뇨가 이상한걸 숨겨뒀더라구^1000',
        //    '내가 특별히',
        //    '고생한 하뇨한테만 알려줄게 !',
        //    '그리고',
        //    '생일 축하해',
        '^1000'
    ],
    typeSpeed: 95,
    showCursor: false,
    onComplete: (self) => {
        $('#ending-img').removeClass('spaceInDown');
        $('#ending-img').addClass('vanishOut');

        setTimeout(function () {
            $("#total").empty();
            $('.t').append(`  <div class="birthday-gift magictime vanishIn">
            <div class="gift">
            <input id='click' type='checkbox'>
            <label class='click' for='click'></label>
            <div class="wishes">Happy Birthday!</div>
                 <div class="sparkles">
                <div class="spark1"></div>
                <div class="spark2"></div>
                <div class="spark3"></div>
                <div class="spark4"></div>
                <div class="spark5"></div>
                <div class="spark6"></div>
              </div>
              </div>
          </div>
          <div class="mt-5">
            힌트
          </div>
          `)
        }, 2000);
    }
});
