'use strict';

try {
  angular.module('cartAppTranslations');
} catch (e) {
  angular.module('cartAppTranslations', ['pascalprecht.translate']);
}

angular.module('cartAppTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'cartWidget': {
        'sr': {
          'PRODUCT_PRICE_BEFORE_DISCOUNT': 'Preço normal',
          'PRODUCT_WAS_REMOVED': '{{ productName }} foi removido do carrinho',
          'PRODUCT_PRICE_WHEN_THERE_IS_NO_DISCOUNT': 'Preço',
          'PRODUCT_PRICE_AFTER_DISCOUNT': 'Preço promocional'
        }
      },
      'CART_WIDGET_EMPTY_CART_MESSAGE': 'O carrinho está vazio',
      'CART_WIDGET_CURRENCY_CONVERTER_DISCLAIMER': 'Processado em {{mainCurrency}}',
      'CART_WIDGET_VIEW_CART_BUTTON': 'Ver Carrinho',
      'CART_WIDGET_CLOSE_CTA': 'Fechar',
      'OUT_OF_STOCK_TITLE': 'Esgotado',
      'CART_TABLE_TOTAL_TITLE': 'TOTAL',
      'CART_WIDGET_CLOSE_BUTTON_TITLE': 'Fechar widget do carrinho',
      'SUBTOTAL_TITLE': 'Subtotal',
      'CART_WIDGET_QUANTITY_TITLE': 'Qtd: ',
      'REMOVE_PRODUCT_BUTTON_TITLE': 'Remover item',
      'SKU_TITLE': 'REF: {{ sku }}',
      'CART_WIDGET_CART_TITLE': 'Carrinho'
    };
    $translateProvider.translations('pt', translations);
    $translateProvider.translations(translations);
    $translateProvider.preferredLanguage('pt');
  }
]);