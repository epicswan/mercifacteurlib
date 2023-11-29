<?php

/**
 * CourrierApiTest
 * PHP version 5
 *
 * @category Class
 * @package  MerciFacteurApi\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Merci facteur API
 *
 * Merci facteur PRO vous permet d'envoyer des courriers depuis votre applicatif via son API.     Types de courriers disponibles :   - Lettre de une ou plusieurs pages.  - Carte postale avec ou sans enveloppe  - Carte pliée  - Carte géante  - Carte non pliée  - Photos sur papier brillant    Modes d'envois disponibles :   - Envoi normal (lettre verte)  - Lettre suivie  - Recommandé avec avis de réception      Au sujet des webhooks : [`https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md#webhooks`](https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md#webhooks)     Librairie PHP et exemples d'intégration : [`https://github.com/MerciFacteur/Merci-facteur-API`](https://github.com/MerciFacteur/Merci-facteur-API)    Infos générales sur l'API : [`https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md`](https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md)    Plus d'informations sur [`https://www.merci-facteur.com/pro`](https://www.merci-facteur.com/pro)    N'hésitez pas à nous contacter via [`https://www.merci-facteur.com/pro/contact.php`](https://www.merci-facteur.com/pro/contact.php)
 *
 * OpenAPI spec version: 1.2.7
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 3.0.51
 */
/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Please update the test case below to test the endpoint.
 */

namespace MerciFacteurApi\Client;

use MerciFacteurApi\Client\Configuration;
use MerciFacteurApi\Client\ApiException;
use MerciFacteurApi\Client\ObjectSerializer;
use PHPUnit\Framework\TestCase;

/**
 * CourrierApiTest Class Doc Comment
 *
 * @category Class
 * @package  MerciFacteurApi\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class CourrierApiTest extends TestCase
{

    /**
     * Setup before running any test cases
     */
    public static function setUpBeforeClass(): void
    {
    }

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
    }

    /**
     * Clean up after running all test cases
     */
    public static function tearDownAfterClass(): void
    {
    }

    /**
     * Test case for deleteEnvoi
     *
     * Annuler un envoi et son contenu.
     *
     */
    public function testDeleteEnvoi()
    {
    }

    /**
     * Test case for getEnvoi
     *
     * Lister les courriers d'un envoi en particulier.
     *
     */
    public function testGetEnvoi()
    {
    }

    /**
     * Test case for getPostagePrice
     *
     * Obtenir le montant d'un ou plusieurs courriers (non nécessaire à l'envoi).
     *
     */
    public function testGetPostagePrice()
    {
    }

    /**
     * Test case for getProof
     *
     * Obtenir les documents preuves d'un courrier (preuve de dépôt, preuve de réception, preuve de télechargement, etc.).
     *
     */
    public function testGetProof()
    {
    }

    /**
     * Test case for getSuiviEnvoi
     *
     * Obtenir le suivi et l'état des courriers d'un envoi.
     *
     */
    public function testGetSuiviEnvoi()
    {
    }

    /**
     * Test case for listEnvois
     *
     * Lister les 50 derniers envois d'un utilisateur.
     *
     */
    public function testListEnvois()
    {
    }

    /**
     * Test case for sendCourrier
     *
     * Valider l'envoi d'un courrier.
     *
     */
    public function testSendCourrierForm()
    {
    }

    /**
     * Test case for uploadFile
     *
     * Charger des fichiers dans un token pour les envoyer dans un courrier (facultatif) - uniquement disponible pour l'envoi de photos actuellement.
     *
     */
    public function testUploadFileForm()
    {
    }
}
