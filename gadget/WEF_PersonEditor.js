/**
 * This JavaScript is a loader of PersonEditor from WE-Framework, works only for
 * other sites (ruwiki users should use local gadgets)
 * 
 * @see https://github.com/vlsergey/WE-Framework
 * @author vlsergey
 */
( function() {

	/** @const */
	var version = 1432457710;

	try {
		mw.loader.addSource( {
			"ruwiki": {
				"loadScript": "//bits.wikimedia.org/ru.wikipedia.org/load.php",
				"apiScript": "//ru.wikipedia.org/w/api.php"
			}
		} );
		mw.loader.register( 'ext.gadget.wefcore', version, [ 'jquery.ui.autocomplete', //
		'jquery.ui.dialog', //
		'jquery.ui.tabs', //
		'jquery.uls.data', //
		], undefined, 'ruwiki' );
		mw.loader.register( 'ext.gadget.wefflags', version, undefined, undefined, 'ruwiki' );
	} catch ( error ) {
		// already registered
	}

	mw.loader.register( 'ext.gadget.wef-PersonEditor', version, [ 'ext.gadget.wefcore', 'ext.gadget.wefflags', ], undefined, 'ruwiki' );
	mw.loader.using( 'ext.gadget.wef-PersonEditor' );
} )();
