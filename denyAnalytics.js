var denyAnalytics = function () {
	var Visit = function (domain, description) {
		//This tracks visitors by saving a md5 hash of their ip, the domain and description variables set here, and the current timestamp.
		//As an opponent of tracking on the internet this is the maximum amount of data I am willing to save about myself freely.
		$.get("http://warcode.net/720px-u/analytics.php?domain="+domain+"&desc="+description+"");
	};

	return {
		Visit: Visit
	};
}();