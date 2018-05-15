window.SkipAd = function() {

    var stop = false;
    if (typeof jQuery !== 'undefined') {
        stop = true;
        removeAdvert();
    }

    if (!stop)
        setTimeout(window.SkipAd, 500);
}

window.ShowAd = function() {

    //console.log('window.ShowAd');
    var stop = false;
    if (typeof jQuery !== 'undefined') {
        stop = true;
        checkAndShowAdvert();
    }

    if (!stop)
        setTimeout(window.ShowAd, 500);
}

window.LoadAd = function() {

    //console.log('window.LoadAd');
    var stop = false;
    if (typeof jQuery !== 'undefined') {
        stop = true;
        checkAndLoadAdvert();

    }

    if (!stop)
        setTimeout(window.LoadAd, 500);
}

function insertAdvert() {
    var gs = getGoogleString();
    $(".googleadgoeshere").append(gs);
}

function removeAdvert() {
    $(".googleadgoeshere").empty();
}

function loadAdvert() {
    var gs = getGoogleString();
    $(".googleadgoeshere").append(gs);
    hideAdvert();
}

function showAdvert() {
    if (isDivValid()) {
        $(".googleadgoeshere").show();
    }
}

function checkAndLoadAdvert() {
    if (isDivValid()) {
        return;
    } else {
        loadAdvert();
    }
}

function checkAndShowAdvert() {
    if (isDivValid()) {
        $(".googleadgoeshere").show();
    } else {
        insertAdvert();
    }
}

function isDivValid() {
    if ($('.googleadgoeshere').length && $('.googleadgoeshere').html().length !== 0) {
        return true;
    } else {
        return false;
    }
}

function hideAdvert() {
    if ($('.googleadgoeshere').length) {
        $(".googleadgoeshere").hide();
    }
}

function getGoogleString()
{
    return (
        '<div style="position:absolute; top: 0; left: 0; background-color:black; z-index:2147483644; overflow:auto; width:100%; height:100%; pointer-events:auto;">' +
        '<div>' +
            '<button onclick="window.SkipAd()" style="background:transparent;border: none;top:5%;right:4.2%;position:fixed;">' +
            '<img src="skip.png" style="background:transparent;border: none;width:38px; height:38px;"><\/button>' +
        '<\/div>'+
            '<div style="text-align:center;position: relative;' +
                'top:30%;' +
                'z-index:2147483645;">' +
                '<div>' +
                    '<script async src="\/\/web.archive.org\/web\/20180515141436\/https:\/\/pagead2.googlesyndication.com\/pagead\/js\/adsbygoogle.js"><\/script>' +
                    '<!-- Slope 300 x 250 -->' +
                    '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px;" data-ad-client="ca-pub-6129580795478709" data-ad-slot="5960928148"><\/ins>' +
                    '<script>' +
                        '(adsbygoogle = window.adsbygoogle || []).push({});' +
                    '<\/script>' +
                '<\/div>' +
            '<\/div>' +
        '<\/div>'
    );
}
/*
     FILE ARCHIVED ON 14:14:36 May 15, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:41:08 May 15, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 433.32 (3)
  esindex: 0.008
  captures_list: 451.897
  CDXLines.iter: 12.444 (3)
  PetaboxLoader3.datanode: 311.565 (4)
  exclusion.robots: 0.182
  exclusion.robots.policy: 0.17
  RedisCDXSource: 2.326
  PetaboxLoader3.resolve: 766.327 (3)
  load_resource: 942.875
*/
