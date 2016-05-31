export function decorateSlickDirective ($provide) {
  'ngInject';

  $provide.decorator('slickDirective', function($delegate, $templateCache, $compile, $timeout) {
    var directive = $delegate[0];
    directive.transclude = true,
    directive.scope = {
      sliderData: '=',
        templateId: '@',
        initOnload: '@',
        data: '=',
        currentIndex: '=',
        accessibility: '@',
        adaptiveHeight: '@',
        arrows: '@',
        asNavFor: '@',
        appendArrows: '@',
        appendDots: '@',
        autoplay: '@',
        autoplaySpeed: '@',
        centerMode: '@',
        centerPadding: '@',
        cssEase: '@',
        customPaging: '&',
        dots: '@',
        draggable: '@',
        easing: '@',
        fade: '@',
        focusOnSelect: '@',
        infinite: '@',
        initialSlide: '@',
        lazyLoad: '@',
        onBeforeChange: '&',
        onAfterChange: '&',
        onInit: '&',
        onReInit: '&',
        onSetPosition: '&',
        pauseOnHover: '@',
        pauseOnDotsHover: '@',
        responsive: '=',
        rtl: '@',
        slide: '@',
        slidesToShow: '@',
        slidesToScroll: '@',
        speed: '@',
        swipe: '@',
        swipeToSlide: '@',
        touchMove: '@',
        touchThreshold: '@',
        useCSS: '@',
        variableWidth: '@',
        vertical: '@',
        prevArrow: '@',
        nextArrow: '@'
    };

    var link = function (scope, element, attrs, ctrl, transclude) {
      var destroySlick, initializeSlick, isInitialized;
      destroySlick = function () {
        return $timeout(function () {
          var slider;
          slider = $(element);
          slider.unslick();
          slider.find('.slick-list').remove();
          return slider;
        });
      };
      initializeSlick = function () {
        $timeout(function () {
          var currentIndex, customPaging, slider;
          slider = $(element);
          if (scope.currentIndex != null) {
            currentIndex = scope.currentIndex;
          }
          customPaging = function (slick, index) {
            return scope.customPaging({
              slick: slick,
              index: index
            });
          };
          slider.slick({
            accessibility: scope.accessibility !== 'false',
            adaptiveHeight: scope.adaptiveHeight === 'true',
            arrows: scope.arrows !== 'false',
            asNavFor: scope.asNavFor ? scope.asNavFor : void 0,
            appendArrows: scope.appendArrows ? $(scope.appendArrows) : $(element),
            appendDots: scope.appendDots ? $(scope.appendDots) : $(element),
            autoplay: scope.autoplay === 'true',
            autoplaySpeed: scope.autoplaySpeed != null ? parseInt(scope.autoplaySpeed, 10) : 3000,
            centerMode: scope.centerMode === 'true',
            centerPadding: scope.centerPadding || '50px',
            cssEase: scope.cssEase || 'ease',
            customPaging: attrs.customPaging ? customPaging : void 0,
            dots: scope.dots === 'true',
            draggable: scope.draggable !== 'false',
            easing: scope.easing || 'linear',
            fade: scope.fade === 'true',
            focusOnSelect: scope.focusOnSelect === 'true',
            infinite: scope.infinite !== 'false',
            initialSlide: scope.initialSlide || 0,
            lazyLoad: scope.lazyLoad || 'ondemand',
            beforeChange: attrs.onBeforeChange ? scope.onBeforeChange : void 0,
            onReInit: attrs.onReInit ? scope.onReInit : void 0,
            onSetPosition: attrs.onSetPosition ? scope.onSetPosition : void 0,
            pauseOnHover: scope.pauseOnHover !== 'false',
            responsive: scope.responsive || void 0,
            rtl: scope.rtl === 'true',
            slide: scope.slide || 'div',
            slidesToShow: scope.slidesToShow != null ? parseInt(scope.slidesToShow, 10) : 1,
            slidesToScroll: scope.slidesToScroll != null ? parseInt(scope.slidesToScroll, 10) : 1,
            speed: scope.speed != null ? parseInt(scope.speed, 10) : 300,
            swipe: scope.swipe !== 'false',
            swipeToSlide: scope.swipeToSlide === 'true',
            touchMove: scope.touchMove !== 'false',
            touchThreshold: scope.touchThreshold ? parseInt(scope.touchThreshold, 10) : 5,
            useCSS: scope.useCSS !== 'false',
            variableWidth: scope.variableWidth === 'true',
            vertical: scope.vertical === 'true',
            prevArrow: scope.prevArrow ? $(scope.prevArrow) : void 0,
            nextArrow: scope.nextArrow ? $(scope.nextArrow) : void 0
          });
          slider.on('init', function (sl) {
            if (attrs.onInit) {
              scope.onInit();
            }
            if (currentIndex != null) {
              return sl.slideHandler(currentIndex);
            }
          });
          slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            if (scope.onAfterChange) {
              scope.onAfterChange();
            }
            if (currentIndex != null) {
              return scope.$apply(function () {
                currentIndex = currentSlide;
                return scope.currentIndex = currentSlide;
              });
            }
          });
          return scope.$watch('currentIndex', function (newVal) {
            if (currentIndex != null && newVal != null && newVal !== currentIndex) {
              return slider.slick('slickGoTo', newVal);
            }
          });
        });
      };

      function transcludeContent() {
        transclude(scope.$parent.$new(false), function (clone, $outerScope) {
          var template = $templateCache.get(scope.templateId);
          var compileTemplate = $compile(template)(scope);
          element.append(compileTemplate);
          initializeSlick();
        });
      }

      scope.parentScope = scope.$parent;
      isInitialized = false;
      scope.$watchCollection('sliderData', function (newVal) {
        if (newVal && newVal.length > 0) {
          if (isInitialized) {
            element.slick('unslick');
            element.empty();
          }
          transcludeContent();
          return isInitialized = true;
        }
      });
    };

    directive.compile = function() {
      return function(scope, element, attrs) {
        link.apply(this, arguments);
      };
    };

    return $delegate;
  });
}