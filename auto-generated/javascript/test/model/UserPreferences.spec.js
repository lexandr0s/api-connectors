/*
 * BitMEX API
 * ## REST API for the BitMEX Trading Platform  [View Changelog](/app/apiChangelog)  -  #### Getting Started  Base URI: [https://www.bitmex.com/api/v1](/api/v1)  ##### Fetching Data  All REST endpoints are documented below. You can try out any query right from this interface.  Most table queries accept `count`, `start`, and `reverse` params. Set `reverse=true` to get rows newest-first.  Additional documentation regarding filters, timestamps, and authentication is available in [the main API documentation](/app/restAPI).  _All_ table data is available via the [Websocket](/app/wsAPI). We highly recommend using the socket if you want to have the quickest possible data without being subject to ratelimits.  ##### Return Types  By default, all data is returned as JSON. Send `?_format=csv` to get CSV data or `?_format=xml` to get XML data.  ##### Trade Data Queries  _This is only a small subset of what is available, to get you started._  Fill in the parameters and click the `Try it out!` button to try any of these queries.  - [Pricing Data](#!/Quote/Quote_get)  - [Trade Data](#!/Trade/Trade_get)  - [OrderBook Data](#!/OrderBook/OrderBook_getL2)  - [Settlement Data](#!/Settlement/Settlement_get)  - [Exchange Statistics](#!/Stats/Stats_history)  Every function of the BitMEX.com platform is exposed here and documented. Many more functions are available.  ##### Swagger Specification  [⇩ Download Swagger JSON](swagger.json)  -  ## All API Endpoints  Click to expand a section. 
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.11-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BitMexApi);
  }
}(this, function(expect, BitMexApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('UserPreferences', function() {
      beforeEach(function() {
        instance = new BitMexApi.UserPreferences();
      });

      it('should create an instance of UserPreferences', function() {
        // TODO: update the code to test UserPreferences
        expect(instance).to.be.a(BitMexApi.UserPreferences);
      });

      it('should have the property alertOnLiquidations (base name: "alertOnLiquidations")', function() {
        // TODO: update the code to test the property alertOnLiquidations
        expect(instance).to.have.property('alertOnLiquidations');
        // expect(instance.alertOnLiquidations).to.be(expectedValueLiteral);
      });

      it('should have the property animationsEnabled (base name: "animationsEnabled")', function() {
        // TODO: update the code to test the property animationsEnabled
        expect(instance).to.have.property('animationsEnabled');
        // expect(instance.animationsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property announcementsLastSeen (base name: "announcementsLastSeen")', function() {
        // TODO: update the code to test the property announcementsLastSeen
        expect(instance).to.have.property('announcementsLastSeen');
        // expect(instance.announcementsLastSeen).to.be(expectedValueLiteral);
      });

      it('should have the property chatChannelID (base name: "chatChannelID")', function() {
        // TODO: update the code to test the property chatChannelID
        expect(instance).to.have.property('chatChannelID');
        // expect(instance.chatChannelID).to.be(expectedValueLiteral);
      });

      it('should have the property colorTheme (base name: "colorTheme")', function() {
        // TODO: update the code to test the property colorTheme
        expect(instance).to.have.property('colorTheme');
        // expect(instance.colorTheme).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property debug (base name: "debug")', function() {
        // TODO: update the code to test the property debug
        expect(instance).to.have.property('debug');
        // expect(instance.debug).to.be(expectedValueLiteral);
      });

      it('should have the property disableEmails (base name: "disableEmails")', function() {
        // TODO: update the code to test the property disableEmails
        expect(instance).to.have.property('disableEmails');
        // expect(instance.disableEmails).to.be(expectedValueLiteral);
      });

      it('should have the property disablePush (base name: "disablePush")', function() {
        // TODO: update the code to test the property disablePush
        expect(instance).to.have.property('disablePush');
        // expect(instance.disablePush).to.be(expectedValueLiteral);
      });

      it('should have the property hideConfirmDialogs (base name: "hideConfirmDialogs")', function() {
        // TODO: update the code to test the property hideConfirmDialogs
        expect(instance).to.have.property('hideConfirmDialogs');
        // expect(instance.hideConfirmDialogs).to.be(expectedValueLiteral);
      });

      it('should have the property hideConnectionModal (base name: "hideConnectionModal")', function() {
        // TODO: update the code to test the property hideConnectionModal
        expect(instance).to.have.property('hideConnectionModal');
        // expect(instance.hideConnectionModal).to.be(expectedValueLiteral);
      });

      it('should have the property hideFromLeaderboard (base name: "hideFromLeaderboard")', function() {
        // TODO: update the code to test the property hideFromLeaderboard
        expect(instance).to.have.property('hideFromLeaderboard');
        // expect(instance.hideFromLeaderboard).to.be(expectedValueLiteral);
      });

      it('should have the property hideNameFromLeaderboard (base name: "hideNameFromLeaderboard")', function() {
        // TODO: update the code to test the property hideNameFromLeaderboard
        expect(instance).to.have.property('hideNameFromLeaderboard');
        // expect(instance.hideNameFromLeaderboard).to.be(expectedValueLiteral);
      });

      it('should have the property hideNotifications (base name: "hideNotifications")', function() {
        // TODO: update the code to test the property hideNotifications
        expect(instance).to.have.property('hideNotifications');
        // expect(instance.hideNotifications).to.be(expectedValueLiteral);
      });

      it('should have the property locale (base name: "locale")', function() {
        // TODO: update the code to test the property locale
        expect(instance).to.have.property('locale');
        // expect(instance.locale).to.be(expectedValueLiteral);
      });

      it('should have the property msgsSeen (base name: "msgsSeen")', function() {
        // TODO: update the code to test the property msgsSeen
        expect(instance).to.have.property('msgsSeen');
        // expect(instance.msgsSeen).to.be(expectedValueLiteral);
      });

      it('should have the property orderBookBinning (base name: "orderBookBinning")', function() {
        // TODO: update the code to test the property orderBookBinning
        expect(instance).to.have.property('orderBookBinning');
        // expect(instance.orderBookBinning).to.be(expectedValueLiteral);
      });

      it('should have the property orderBookType (base name: "orderBookType")', function() {
        // TODO: update the code to test the property orderBookType
        expect(instance).to.have.property('orderBookType');
        // expect(instance.orderBookType).to.be(expectedValueLiteral);
      });

      it('should have the property orderClearImmediate (base name: "orderClearImmediate")', function() {
        // TODO: update the code to test the property orderClearImmediate
        expect(instance).to.have.property('orderClearImmediate');
        // expect(instance.orderClearImmediate).to.be(expectedValueLiteral);
      });

      it('should have the property orderControlsPlusMinus (base name: "orderControlsPlusMinus")', function() {
        // TODO: update the code to test the property orderControlsPlusMinus
        expect(instance).to.have.property('orderControlsPlusMinus');
        // expect(instance.orderControlsPlusMinus).to.be(expectedValueLiteral);
      });

      it('should have the property showLocaleNumbers (base name: "showLocaleNumbers")', function() {
        // TODO: update the code to test the property showLocaleNumbers
        expect(instance).to.have.property('showLocaleNumbers');
        // expect(instance.showLocaleNumbers).to.be(expectedValueLiteral);
      });

      it('should have the property sounds (base name: "sounds")', function() {
        // TODO: update the code to test the property sounds
        expect(instance).to.have.property('sounds');
        // expect(instance.sounds).to.be(expectedValueLiteral);
      });

      it('should have the property strictIPCheck (base name: "strictIPCheck")', function() {
        // TODO: update the code to test the property strictIPCheck
        expect(instance).to.have.property('strictIPCheck');
        // expect(instance.strictIPCheck).to.be(expectedValueLiteral);
      });

      it('should have the property strictTimeout (base name: "strictTimeout")', function() {
        // TODO: update the code to test the property strictTimeout
        expect(instance).to.have.property('strictTimeout');
        // expect(instance.strictTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property tickerGroup (base name: "tickerGroup")', function() {
        // TODO: update the code to test the property tickerGroup
        expect(instance).to.have.property('tickerGroup');
        // expect(instance.tickerGroup).to.be(expectedValueLiteral);
      });

      it('should have the property tickerPinned (base name: "tickerPinned")', function() {
        // TODO: update the code to test the property tickerPinned
        expect(instance).to.have.property('tickerPinned');
        // expect(instance.tickerPinned).to.be(expectedValueLiteral);
      });

      it('should have the property tradeLayout (base name: "tradeLayout")', function() {
        // TODO: update the code to test the property tradeLayout
        expect(instance).to.have.property('tradeLayout');
        // expect(instance.tradeLayout).to.be(expectedValueLiteral);
      });

    });
  });

}));
