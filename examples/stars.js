var assert = require ('assert');
var fs = require ('fs');
var swisseph = require ('..');

// Test date
var date = {year: 2012, month: 1, day: 1, hour: 0};
console.log ('Test date:', date);

var flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_MOSEPH;

// path to ephemeris data
swisseph.swe_set_ephe_path (__dirname + '/../ephe');

// Julian day
swisseph.swe_julday (date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL, function (julday_ut) {
	assert.equal (julday_ut, 2455927.5);
	console.log ('Julian UT day for date:', julday_ut);

	// Aldebaran position
	swisseph.swe_fixstar_ut ('Aldebaran', julday_ut, flag, function (body) {
		assert (!body.error, body.error);
		console.log ('Aldebaran position:', body);
	});
});
