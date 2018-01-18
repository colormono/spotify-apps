<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Serie -->
        <title>AdLink</title>
        <meta name="description" content="">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.3.7/mobile-detect.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <script type="text/javascript">
            
            // Geolocation service
            // http://freegeoip.net/
            $.getJSON('http://freegeoip.net/json/', function(result) {
                
                // Google Play Links
                var androidLatam = "https://play.google.com/store/apps/details?id=com.hbo.broadband&referrer=utm_source%3DSpotify%26utm_medium%3Dmusic%2520analyzer%26utm_campaign%3DGO%2520IAP%2520Spotify%2520Campaign";
                var androidBrazil = "https://play.google.com/store/apps/details?id=com.hbo.broadband.br&referrer=utm_source%3DSpotify%26utm_medium%3Dmusic%2520analyzer%26utm_campaign%3DGO%2520IAP%2520Spotify%2520Campaign";
                
                // Apple App Store Links
                var iosLatam = "https://itunes.apple.com/app/apple-store/id1047848937?pt=118624278&ct=Music%20Analyzer&mt=8";
                var iosBrazil = "https://itunes.apple.com/app/apple-store/id1124855250?pt=118624278&ct=Music%20Analyzer&mt=8";
                
                // Desktop Links
                var desktopLatam = "https://co.hbogola.com/authentication?cid=spotify:musicanalyzer:na:hbogo_iap_spotify_latam_2017:ims_latam";
                var desktopBrazil = "https://br.hbogola.com/authentication?cid=spotify:musicanalyzer:na:hbogo_iap_spotify_brazil_2017:ims_bra";

                // Get user country code
                var countryCode = result.country_code;
                console.log("countryCode: ", countryCode);

                // Mobile detect
                // http://hgoebl.github.io/mobile-detect.js/
                var mobileDetected = new MobileDetect(window.navigator.userAgent);
                var os = mobileDetected.os()
                console.log("os: ", os); // 'AndroidOS' o 'iOS'

                // Redirect
                var redirectUrl = "";
                if( countryCode == 'BR' ){
                    if( os == 'AndroidOS' ){ redirectUrl = androidBrazil; }
                    else if( os == 'iOS' ){ redirectUrl = iosBrazil; }
                    else { redirectUrl = desktopBrazil; }
                } else {
                    if( os == 'AndroidOS' ){ redirectUrl = androidLatam; }
                    else if( os == 'iOS' ){ redirectUrl = iosLatam; }
                    else { redirectUrl = desktopLatam; }
                }
                window.location.href = redirectUrl;
            });
        </script>
    </body>
</html>