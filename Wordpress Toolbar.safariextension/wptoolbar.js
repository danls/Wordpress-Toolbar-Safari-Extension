// WordPress Admin Toolbar Bookmarklet
// http://iamnotagoodartist.com/other/wordpress-admin-toolbar-bookmarklet/

/*
if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=runthis;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';

	document.body.appendChild(jQ);
} else {
	runthis();
}
*/

runthis();

function runthis() {
	if ($("#wptb").length==0) {
		/*
		if ($("#wptb_css").length == 0) {
			$("body").append("<link id='wptb_css' rel='stylesheet' href='http://wptoolbar.iamnotagoodartist.com/wptb_style.css' type='text/css' />");
		}
		*/
		$("body").append("\
			<ul id='wptb' style='display:none; top: -5000px'><li id='wptb_dashboard'><a href='/wp-admin/'>Dashboard</a><span></span><ul><li><p>Dashboard</p></li></ul></li><li class='wptb_sep'>&nbsp;</li><li id='wptb_posts'><a href='/wp-admin/edit.php'>Posts</a><span></span><ul><li><p>Posts</p></li><li><a href='/wp-admin/edit.php'>Edit</a></li><li><a href='/wp-admin/post-new.php'>Add New</a></li><li><a href='/wp-admin/edit-tags.php?taxonomy=post_tag'>Post Tags</a></li><li><a href='/wp-admin/categories.php'>Categories</a></li></ul></li><li id='wptb_media'><a href='/wp-admin/upload.php'>Media</a><span></span><ul><li><p>Media</p></li><li><a href='/wp-admin/upload.php'>Library</a></li><li><a href='/wp-admin/media-new.php'>Add New</a></li></ul></li><li id='wptb_links'><a href='/wp-admin/link-manager.php'>Links</a><span></span><ul><li><p>Links</p></li><li><a href='/wp-admin/link-manager.php'>Edit</a></li><li><a href='/wp-admin/link-add.php'>Add New</a></li><li><a href='/wp-admin/edit-link-categories.php'>Link Categories</a></li></ul></li><li id='wptb_pages'><a href='/wp-admin/edit-pages.php'>Pages</a><span></span><ul><li><p>Pages</p></li><li><a href='/wp-admin/edit-pages.php'>Edit</a></li><li><a href='/wp-admin/page-new.php'>Add New</a></li></ul></li><li id='wptb_comments'><a href='/wp-admin/edit-comments.php'>Comments</a><span></span><ul><li><p>Comments</p></li></ul></li><li class='wptb_sep'>&nbsp;</li><li id='wptb_appearance'><a href='/wp-admin/themes.php'>Appearance</a><span></span><ul><li><p>Appearance</p></li><li><a href='/wp-admin/themes.php'>Themes</a></li><li><a href='/wp-admin/widgets.php'>Widgets</a></li><li><a href='/wp-admin/theme-editor.php'>Editor</a></li><li><a href='/wp-admin/theme-install.php'>Add New Themes</a></li></ul></li><li id='wptb_plugins'><a href='/wp-admin/plugins.php'>Plugins</a><span></span><ul><li><p>Plugins</p></li><li><a href='/wp-admin/plugins.php'>Installed</a></li><li><a href='/wp-admin/plugin-install.php'>Add New</a></li><li><a href='/wp-admin/plugin-editor.php'>Editor</a></li></ul></li><li id='wptb_users'><a href='/wp-admin/users.php'>Users</a><span></span><ul><li><p>Users</p></li><li><a href='/wp-admin/users.php'>Authors/Users</a></li><li><a href='/wp-admin/user-new.php'>Add New</a></li><li><a href='/wp-admin/profile.php'>Your Profile</a></li></ul></li><li id='wptb_tools'><a href='/wp-admin/tools.php'>Tools</a><span></span><ul><li><p>Tools</p></li><li><a href='/wp-admin/tools.php'>Tools</a></li><li><a href='/wp-admin/import.php'>Import</a></li><li><a href='/wp-admin/export.php'>Export</a></li><li><a href='/wp-admin/update-core.php'>Upgrade</a></li></ul></li><li id='wptb_settings'><a href='/wp-admin/options-general.php'>Settings</a><span></span><ul><li><p>Settings</p></li><li><a href='/wp-admin/options-general.php'>General</a></li><li><a href='/wp-admin/options-writing.php'>Writing</a></li><li><a href='/wp-admin/options-reading.php'>Reading</a></li><li><a href='/wp-admin/options-discussion.php'>Discussion</a></li><li><a href='/wp-admin/options-media.php'>Media</a></li><li><a href='/wp-admin/options-privacy.php'>Privacy</a></li><li><a href='/wp-admin/options-permalink.php'>Permalinks</a></li><li><a href='/wp-admin/options-misc.php'>Miscellaneous</a></li></ul></li></ul>");
		$("#wptb").css("top", "5px").fadeIn();
//		alert("");
	} else {
		$("#wptb").fadeOut(function() {
			$('#wptb').remove();
		});
		// setTimeout("$('#wptb').remove()", 1000);
	}
}

// a la http://www.codingforums.com/archive/index.php/t-59339.html
function get(name) {
	var q = unescape(location.search.substring(1)).split(/[=&]/);
	for (var j=0; j<q.length; j+=2) {
		if (q[j] == name) {	return q[j+1]; }
	}
	return null;
}