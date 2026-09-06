webpackHotUpdate_N_E("pages/index",{

/***/ "./payload/project.ts":
/*!****************************!*\
  !*** ./payload/project.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var project = {
  disable: false,
  list: [{
    title: '코오롱 DataWare(META#) 솔루션 업그레이드',
    where: '주식회사 유니온시스템즈',
    startedAt: '2026-03',
    endedAt: '2026-08',
    descriptions: [{
      content: '기존 솔루션의 소스 구조 및 주요 기능 분석, 신규 버전에 맞춘 코드 수정'
    }, {
      content: 'Ext JS 기반 화면 기능 수정 및 백엔드 API 연동'
    }, {
      content: '표준단어·도메인·표준용어 관리와 버전업 관련 기능 개발'
    }, {
      content: '기술 환경: Java, Spring Boot, MyBatis, PostgreSQL, Ext JS'
    }]
  }, {
    title: '삼성전자 Next MOSAIC 개발 및 화동닷컴·화동옥션 유지보수',
    where: '토라웨어(주) · 표시 기간은 재직 기간 기준',
    startedAt: '2025-02',
    endedAt: '2026-03',
    descriptions: [{
      content: '삼성전자 Next MOSAIC 설문조사 시스템',
      descriptions: [{
        content: '삼성전자 Next MOSAIC: 설문조사 및 공지사항 REST API 개발'
      }, {
        content: 'Vue 화면과 Spring Boot 백엔드 API 연동'
      }, {
        content: '삼성SDS LLM 팀과 협업하여 AI API 기능 및 통합검색 인덱싱 연동'
      }, {
        content: 'SonarQube를 활용한 정적 분석 테스트'
      }, {
        content: '기술 환경: Java, Spring Boot, MyBatis, PostgreSQL, Vue, REST API'
      }]
    }, {
      content: '화동닷컴·화동옥션 유지보수',
      descriptions: [{
        content: '화동닷컴·화동옥션: Spring·JSP 기반 화면 및 기존 기능 유지보수'
      }, {
        content: '운영 요청에 따른 JSP 화면 및 프론트엔드 코드 수정'
      }, {
        content: '정기 마케팅 메일의 HTML 콘텐츠와 발송 관련 코드 수정'
      }, {
        content: '기술 환경: Java, Spring, JSP, jQuery'
      }]
    }]
  }, {
    title: '재난 예·경보 플랫폼 개발 및 유지보수',
    where: '주식회사 한국아이오티기술원',
    startedAt: '2022-10',
    endedAt: '2024-01',
    descriptions: [{
      content: 'PHP 기반 시스템을 Java·Spring Boot 기반 REST API 구조로 전환'
    }, {
      content: 'Java TCP Socket을 활용한 행안부 전광판 통신 기능 구현'
    }, {
      content: 'KIT밸리 재난 방송 CAP 프로토콜 연계 (XML 양식)'
    }, {
      content: '다온시스템 전광판, 공주시 BIS, KT 스마트메시지 및 인포뱅크 SMS 연동'
    }, {
      content: 'GS 인증 기준에 따른 API 및 예외 처리 보완'
    }, {
      content: '데이터베이스 주요 정보의 SEED 암호화 적용 및 암호화·복호화 처리 로직 수정'
    }, {
      content: 'Windows Scheduler를 활용한 프로그램 자동 실행 환경 구성'
    }, {
      content: '인증 시험에서 발견된 결함 수정 및 재검증'
    }, {
      content: '기술 환경: Java, Spring Boot, MyBatis, MariaDB, REST API, TCP Socket, MQTT'
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (project);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwid2hlcmUiLCJzdGFydGVkQXQiLCJlbmRlZEF0IiwiZGVzY3JpcHRpb25zIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLCtCQURUO0FBRUVDLFNBQUssRUFBRSxjQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFksRUFVWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQVZZO0FBTGhCLEdBREksRUFxQko7QUFDRUwsU0FBSyxFQUFFLHNDQURUO0FBRUVDLFNBQUssRUFBRSwyQkFGVDtBQUdFQyxhQUFTLEVBQUUsU0FIYjtBQUlFQyxXQUFPLEVBQUUsU0FKWDtBQUtFQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsYUFBTyxFQUFFLDJCQURYO0FBRUVELGtCQUFZLEVBQUUsQ0FDWjtBQUNFQyxlQUFPLEVBQUU7QUFEWCxPQURZLEVBSVo7QUFDRUEsZUFBTyxFQUFFO0FBRFgsT0FKWSxFQU9aO0FBQ0VBLGVBQU8sRUFBRTtBQURYLE9BUFksRUFVWjtBQUNFQSxlQUFPLEVBQUU7QUFEWCxPQVZZLEVBYVo7QUFDRUEsZUFBTyxFQUFFO0FBRFgsT0FiWTtBQUZoQixLQURZLEVBcUJaO0FBQ0VBLGFBQU8sRUFBRSxnQkFEWDtBQUVFRCxrQkFBWSxFQUFFLENBQ1o7QUFDRUMsZUFBTyxFQUFFO0FBRFgsT0FEWSxFQUlaO0FBQ0VBLGVBQU8sRUFBRTtBQURYLE9BSlksRUFPWjtBQUNFQSxlQUFPLEVBQUU7QUFEWCxPQVBZLEVBVVo7QUFDRUEsZUFBTyxFQUFFO0FBRFgsT0FWWTtBQUZoQixLQXJCWTtBQUxoQixHQXJCSSxFQWtFSjtBQUNFTCxTQUFLLEVBQUUsdUJBRFQ7QUFFRUMsU0FBSyxFQUFFLGdCQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFksRUFVWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQVZZLEVBYVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FiWSxFQWdCWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQWhCWSxFQW1CWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQW5CWSxFQXNCWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQXRCWSxFQXlCWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQXpCWTtBQUxoQixHQWxFSTtBQUYwQixDQUFsQztBQTBHZVIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTYzY2MxMTg2NWJhMGU4OGNhYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcm9qZWN0IH0gZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3QvSVByb2plY3QnO1xyXG5cclxuY29uc3QgcHJvamVjdDogSVByb2plY3QuUGF5bG9hZCA9IHtcclxuICBkaXNhYmxlOiBmYWxzZSxcclxuICBsaXN0OiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7L2U7Jik66GxIERhdGFXYXJlKE1FVEEjKSDshpTro6jshZgg7JeF6re466CI7J2065OcJyxcclxuICAgICAgd2hlcmU6ICfso7zsi53tmozsgqwg7Jyg64uI7Jio7Iuc7Iqk7YWc7KaIJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNi0wMycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI2LTA4JyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+q4sOyhtCDshpTro6jshZjsnZgg7IaM7IqkIOq1rOyhsCDrsI8g7KO87JqUIOq4sOuKpSDrtoTshJ0sIOyLoOq3nCDrsoTsoITsl5Ag66ee7LaYIOy9lOuTnCDsiJjsoJUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ0V4dCBKUyDquLDrsJgg7ZmU66m0IOq4sOuKpSDsiJjsoJUg67CPIOuwseyXlOuTnCBBUEkg7Jew64+ZJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICftkZzspIDri6jslrTCt+uPhOuplOyduMK37ZGc7KSA7Jqp7Ja0IOq0gOumrOyZgCDrsoTsoITsl4Ug6rSA66CoIOq4sOuKpSDqsJzrsJwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+q4sOyIoCDtmZjqsr06IEphdmEsIFNwcmluZyBCb290LCBNeUJhdGlzLCBQb3N0Z3JlU1FMLCBFeHQgSlMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+yCvOyEseyghOyekCBOZXh0IE1PU0FJQyDqsJzrsJwg67CPIO2ZlOuPmeuLt+y7tMK37ZmU64+Z7Jil7IWYIOycoOyngOuztOyImCcsXHJcbiAgICAgIHdoZXJlOiAn7Yag65287Juo7Ja0KOyjvCkgwrcg7ZGc7IucIOq4sOqwhOydgCDsnqzsp4Eg6riw6rCEIOq4sOykgCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjUtMDInLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNi0wMycsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsgrzshLHsoITsnpAgTmV4dCBNT1NBSUMg7ISk66y47KGw7IKsIOyLnOyKpO2FnCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfsgrzshLHsoITsnpAgTmV4dCBNT1NBSUM6IOyEpOusuOyhsOyCrCDrsI8g6rO17KeA7IKs7ZWtIFJFU1QgQVBJIOqwnOuwnCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnVnVlIO2ZlOuptOqzvCBTcHJpbmcgQm9vdCDrsLHsl5Trk5wgQVBJIOyXsOuPmScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAn7IK87ISxU0RTIExMTSDtjIDqs7wg7ZiR7JeF7ZWY7JesIEFJIEFQSSDquLDriqUg67CPIO2Gte2VqeqygOyDiSDsnbjrjbHsi7Eg7Jew64+ZJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdTb25hclF1YmXrpbwg7Zmc7Jqp7ZWcIOygleyggSDrtoTshJ0g7YWM7Iqk7Yq4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfquLDsiKAg7ZmY6rK9OiBKYXZhLCBTcHJpbmcgQm9vdCwgTXlCYXRpcywgUG9zdGdyZVNRTCwgVnVlLCBSRVNUIEFQSScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+2ZlOuPmeuLt+y7tMK37ZmU64+Z7Jil7IWYIOycoOyngOuztOyImCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICftmZTrj5nri7fsu7TCt+2ZlOuPmeyYpeyFmDogU3ByaW5nwrdKU1Ag6riw67CYIO2ZlOuptCDrsI8g6riw7KG0IOq4sOuKpSDsnKDsp4Drs7TsiJgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+yatOyYgSDsmpTssq3sl5Ag65Sw66W4IEpTUCDtmZTrqbQg67CPIO2UhOuhoO2KuOyXlOuTnCDsvZTrk5wg7IiY7KCVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfsoJXquLAg66eI7LyA7YyFIOuplOydvOydmCBIVE1MIOy9mO2FkOy4oOyZgCDrsJzshqEg6rSA66CoIOy9lOuTnCDsiJjsoJUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+q4sOyIoCDtmZjqsr06IEphdmEsIFNwcmluZywgSlNQLCBqUXVlcnknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfsnqzrgpwg7JiIwrfqsr3rs7Qg7ZSM656r7Y+8IOqwnOuwnCDrsI8g7Jyg7KeA67O07IiYJyxcclxuICAgICAgd2hlcmU6ICfso7zsi53tmozsgqwg7ZWc6rWt7JWE7J207Jik7Yuw6riw7Iig7JuQJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyMi0xMCcsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI0LTAxJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ1BIUCDquLDrsJgg7Iuc7Iqk7YWc7J2EIEphdmHCt1NwcmluZyBCb290IOq4sOuwmCBSRVNUIEFQSSDqtazsobDroZwg7KCE7ZmYJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdKYXZhIFRDUCBTb2NrZXTsnYQg7Zmc7Jqp7ZWcIO2WieyViOu2gCDsoITqtJHtjJAg7Ya17IugIOq4sOuKpSDqtaztmIQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ0tJVOuwuOumrCDsnqzrgpwg67Cp7IahIENBUCDtlITroZzthqDsvZwg7Jew6rOEIChYTUwg7JaR7IudKScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn64uk7Jio7Iuc7Iqk7YWcIOyghOq0ke2MkCwg6rO17KO87IucIEJJUywgS1Qg7Iqk66eI7Yq466mU7Iuc7KeAIOuwjyDsnbjtj6zrsYXtgawgU01TIOyXsOuPmScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnR1Mg7J247KadIOq4sOykgOyXkCDrlLDrpbggQVBJIOuwjyDsmIjsmbgg7LKY66asIOuztOyZhCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn642w7J207YSw67Kg7J207IqkIOyjvOyalCDsoJXrs7TsnZggU0VFRCDslZTtmLjtmZQg7KCB7JqpIOuwjyDslZTtmLjtmZTCt+uzte2YuO2ZlCDsspjrpqwg66Gc7KeBIOyImOyglScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnV2luZG93cyBTY2hlZHVsZXLrpbwg7Zmc7Jqp7ZWcIO2UhOuhnOq3uOueqCDsnpDrj5kg7Iuk7ZaJIO2ZmOqyvSDqtazshLEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yduOymnSDsi5ztl5jsl5DshJwg67Cc6rKs65CcIOqysO2VqCDsiJjsoJUg67CPIOyerOqygOymnScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn6riw7IigIO2ZmOqyvTogSmF2YSwgU3ByaW5nIEJvb3QsIE15QmF0aXMsIE1hcmlhREIsIFJFU1QgQVBJLCBUQ1AgU29ja2V0LCBNUVRUJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==