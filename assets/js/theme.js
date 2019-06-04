

function toggleState(item){
    if(item.className == "on") {
       item.className = "off";
       switch_style('dark');
    } else {
       item.className = "on";
       switch_style('light');
    }
 }
var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;

function switch_style ( css_title )
{
var i, link_tag ;
for (i = 0, link_tag = document.getElementsByTagName("link") ;
i < link_tag.length ; i++ ) {
if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
link_tag[i].title) {
link_tag[i].disabled = true ;
if (link_tag[i].title == css_title) {
 link_tag[i].disabled = false ;
}
}
set_cookie( style_cookie_name, css_title,
style_cookie_duration );
}
}
function set_style_from_cookie()
{
var css_title = get_cookie( style_cookie_name );
if (css_title.length) {
if(css_title == 'dark'){
document.getElementById('switch').classList.add('off');
}else{
document.getElementById('switch').classList.add('on');
}


switch_style( css_title );
}
}

function set_cookie ( cookie_name, cookie_value,
lifespan_in_days, valid_domain )
{

var domain_string = valid_domain ?
                ("; domain=" + valid_domain) : '' ;
document.cookie = cookie_name +
                "=" + encodeURIComponent( cookie_value ) +
                "; max-age=" + 60 * 60 *
                24 * lifespan_in_days +
                "; path=/" + domain_string ;
}

function get_cookie ( cookie_name )
{
// 
var cookie_string = document.cookie ;
if (cookie_string.length != 0) {
   var cookie_value = '';
   if(cookie_string.indexOf('dark') != -1){
      cookie_value = 'dark';
   }else{
      cookie_value = 'light';
   }
   return decodeURIComponent ( cookie_value ) ;
}
return '' ;
}