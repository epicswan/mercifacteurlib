/*
 * Merci facteur API
 * Merci facteur PRO vous permet d'envoyer des courriers depuis votre applicatif via son API.     Types de courriers disponibles :   - Lettre de une ou plusieurs pages.  - Carte postale avec ou sans enveloppe  - Carte pliée  - Carte géante  - Carte non pliée  - Photos sur papier brillant    Modes d'envois disponibles :   - Envoi normal (lettre verte)  - Lettre suivie  - Recommandé avec avis de réception      Au sujet des webhooks : [`https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md#webhooks`](https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md#webhooks)     Librairie PHP et exemples d'intégration : [`https://github.com/MerciFacteur/Merci-facteur-API`](https://github.com/MerciFacteur/Merci-facteur-API)    Infos générales sur l'API : [`https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md`](https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md)    Plus d'informations sur [`https://www.merci-facteur.com/pro`](https://www.merci-facteur.com/pro)    N'hésitez pas à nous contacter via [`https://www.merci-facteur.com/pro/contact.php`](https://www.merci-facteur.com/pro/contact.php)
 *
 * OpenAPI spec version: 1.2.7
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
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
    factory(root.expect, root.MerciFacteurApi);
  }
}(this, function(expect, MerciFacteurApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse20012Detail', function() {
      beforeEach(function() {
        instance = new MerciFacteurApi.InlineResponse20012Detail();
      });

      it('should create an instance of InlineResponse20012Detail', function() {
        // TODO: update the code to test InlineResponse20012Detail
        expect(instance).to.be.a(MerciFacteurApi.InlineResponse20012Detail);
      });

      it('should have the property refCourrier (base name: "refCourrier")', function() {
        // TODO: update the code to test the property refCourrier
        expect(instance).to.have.property('refCourrier');
        // expect(instance.refCourrier).to.be(expectedValueLiteral);
      });

      it('should have the property dest (base name: "dest")', function() {
        // TODO: update the code to test the property dest
        expect(instance).to.have.property('dest');
        // expect(instance.dest).to.be(expectedValueLiteral);
      });

    });
  });

}));
