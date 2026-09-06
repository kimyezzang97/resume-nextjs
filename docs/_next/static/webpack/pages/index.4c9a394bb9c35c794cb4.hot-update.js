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
    where: '유니온시스템즈',
    startedAt: '2026-03',
    endedAt: '2026-08',
    descriptions: [{
      content: '기존 솔루션의 소스 구조 및 주요 기능 분석, 신규 버전에 맞춘 코드 수정'
    }, {
      content: 'Ext JS 기반 화면 기능 수정 및 백엔드 API 연동'
    }, {
      content: '업무용어 관련 기능 개발'
    }]
  }, {
    title: '삼성전자 Next MOSAIC 설문조사 시스템',
    where: '토라웨어',
    startedAt: '2025-05',
    endedAt: '2026-03',
    descriptions: [{
      content: '삼성전자 Next MOSAIC: 설문조사 및 공지사항 REST API 개발'
    }, {
      content: 'Vue 화면과 Spring Boot 백엔드 API 연동'
    }, {
      content: '삼성SDS LLM 팀과 협업하여 AI API 기능 및 통합검색 인덱싱 연동'
    }, {
      content: 'SonarQube를 활용한 정적 분석 테스트'
    }]
  }, {
    title: '화동닷컴·화동옥션 유지보수',
    where: '토라웨어',
    startedAt: '2025-02',
    endedAt: '2025-04',
    descriptions: [{
      content: '화동닷컴·화동옥션: Spring·JSP 기반 화면 및 기존 기능 유지보수'
    }, {
      content: '운영 요청에 따른 JSP 화면 및 프론트엔드 코드 수정'
    }, {
      content: '정기 마케팅 메일의 HTML 콘텐츠와 발송 관련 코드 수정'
    }]
  }, {
    title: '재난 예·경보 플랫폼 GS 인증 취득',
    where: '한국아이오티기술원',
    startedAt: '2023-07',
    endedAt: '2023-08',
    descriptions: [{
      content: 'GS 인증 기준에 따른 API 및 예외 처리 보완'
    }, {
      content: '데이터베이스 주요 정보의 SEED 암호화 적용 및 암호화·복호화 처리 로직 수정'
    }, {
      content: '인증 시험에서 발견된 결함 수정 및 재검증'
    }, {
      content: 'Windows Scheduler를 활용한 프로그램 자동 실행 환경 구성'
    }]
  }, {
    title: '재난 예·경보 플랫폼 개발 및 유지보수',
    where: '한국아이오티기술원',
    startedAt: '2022-09',
    endedAt: '2024-01',
    descriptions: [{
      content: 'Java TCP Socket을 활용한 행안부 전광판 통신 기능 구현'
    }, {
      content: 'KIT밸리 재난 방송 CAP 프로토콜 연계 (XML 양식)'
    }, {
      content: '다온시스템 전광판 및 공주시 BIS 연동'
    }, {
      content: 'KT 스마트메시지 및 인포뱅크 SMS 연동'
    }, {
      content: 'Linux 서버 초기 세팅 및 애플리케이션 실행 환경 구성'
    }]
  }, {
    title: 'PHP 시스템의 Spring Boot 전환',
    where: '한국아이오티기술원',
    startedAt: '2022-09',
    endedAt: '2022-12',
    descriptions: [{
      content: 'PHP 기반 시스템을 Java·Spring Boot 기반 REST API 구조로 전환'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwid2hlcmUiLCJzdGFydGVkQXQiLCJlbmRlZEF0IiwiZGVzY3JpcHRpb25zIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLCtCQURUO0FBRUVDLFNBQUssRUFBRSxTQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0FESSxFQWtCSjtBQUNFTCxTQUFLLEVBQUUsMkJBRFQ7QUFFRUMsU0FBSyxFQUFFLE1BRlQ7QUFHRUMsYUFBUyxFQUFFLFNBSGI7QUFJRUMsV0FBTyxFQUFFLFNBSlg7QUFLRUMsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLGFBQU8sRUFBRTtBQURYLEtBRFksRUFJWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQUpZLEVBT1o7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FQWSxFQVVaO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBVlk7QUFMaEIsR0FsQkksRUFzQ0o7QUFDRUwsU0FBSyxFQUFFLGdCQURUO0FBRUVDLFNBQUssRUFBRSxNQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0F0Q0ksRUF1REo7QUFDRUwsU0FBSyxFQUFFLHNCQURUO0FBRUVDLFNBQUssRUFBRSxXQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFksRUFVWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQVZZO0FBTGhCLEdBdkRJLEVBMkVKO0FBQ0VMLFNBQUssRUFBRSx1QkFEVDtBQUVFQyxTQUFLLEVBQUUsV0FGVDtBQUdFQyxhQUFTLEVBQUUsU0FIYjtBQUlFQyxXQUFPLEVBQUUsU0FKWDtBQUtFQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsYUFBTyxFQUFFO0FBRFgsS0FEWSxFQUlaO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBSlksRUFPWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQVBZLEVBVVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FWWSxFQWFaO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBYlk7QUFMaEIsR0EzRUksRUFrR0o7QUFDRUwsU0FBSyxFQUFFLHlCQURUO0FBRUVDLFNBQUssRUFBRSxXQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZO0FBTGhCLEdBbEdJO0FBRjBCLENBQWxDO0FBa0hlUixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YzlhMzk0YmI5YzM1Yzc5NGNiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb2plY3QgfSBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdC9JUHJvamVjdCc7XHJcblxyXG5jb25zdCBwcm9qZWN0OiBJUHJvamVjdC5QYXlsb2FkID0ge1xyXG4gIGRpc2FibGU6IGZhbHNlLFxyXG4gIGxpc3Q6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfsvZTsmKTrobEgRGF0YVdhcmUoTUVUQSMpIOyGlOujqOyFmCDsl4Xqt7jroIjsnbTrk5wnLFxyXG4gICAgICB3aGVyZTogJ+ycoOuLiOyYqOyLnOyKpO2FnOymiCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjYtMDMnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNi0wOCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfquLDsobQg7IaU66Oo7IWY7J2YIOyGjOyKpCDqtazsobAg67CPIOyjvOyalCDquLDriqUg67aE7ISdLCDsi6Dqt5wg67KE7KCE7JeQIOunnuy2mCDsvZTrk5wg7IiY7KCVJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdFeHQgSlMg6riw67CYIO2ZlOuptCDquLDriqUg7IiY7KCVIOuwjyDrsLHsl5Trk5wgQVBJIOyXsOuPmScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7JeF66y07Jqp7Ja0IOq0gOugqCDquLDriqUg6rCc67CcJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfsgrzshLHsoITsnpAgTmV4dCBNT1NBSUMg7ISk66y47KGw7IKsIOyLnOyKpO2FnCcsXHJcbiAgICAgIHdoZXJlOiAn7Yag65287Juo7Ja0JyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wNScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI2LTAzJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yCvOyEseyghOyekCBOZXh0IE1PU0FJQzog7ISk66y47KGw7IKsIOuwjyDqs7Xsp4Dsgqztla0gUkVTVCBBUEkg6rCc67CcJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdWdWUg7ZmU66m06rO8IFNwcmluZyBCb290IOuwseyXlOuTnCBBUEkg7Jew64+ZJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsgrzshLFTRFMgTExNIO2MgOqzvCDtmJHsl4XtlZjsl6wgQUkgQVBJIOq4sOuKpSDrsI8g7Ya17ZWp6rKA7IOJIOyduOuNseyLsSDsl7Drj5knLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ1NvbmFyUXViZeulvCDtmZzsmqntlZwg7KCV7KCBIOu2hOyEnSDthYzsiqTtirgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+2ZlOuPmeuLt+y7tMK37ZmU64+Z7Jil7IWYIOycoOyngOuztOyImCcsXHJcbiAgICAgIHdoZXJlOiAn7Yag65287Juo7Ja0JyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wMicsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTA0JyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+2ZlOuPmeuLt+y7tMK37ZmU64+Z7Jil7IWYOiBTcHJpbmfCt0pTUCDquLDrsJgg7ZmU66m0IOuwjyDquLDsobQg6riw64qlIOycoOyngOuztOyImCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7Jq07JiBIOyalOyyreyXkCDrlLDrpbggSlNQIO2ZlOuptCDrsI8g7ZSE66Gg7Yq47JeU65OcIOy9lOuTnCDsiJjsoJUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+ygleq4sCDrp4jsvIDtjIUg66mU7J287J2YIEhUTUwg7L2Y7YWQ7Lig7JmAIOuwnOyGoSDqtIDroKgg7L2U65OcIOyImOyglScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7J6s64KcIOyYiMK36rK967O0IO2UjOueq+2PvCBHUyDsnbjspp0g7Leo65OdJyxcclxuICAgICAgd2hlcmU6ICftlZzqta3slYTsnbTsmKTti7DquLDsiKDsm5AnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDIzLTA3JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjMtMDgnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnR1Mg7J247KadIOq4sOykgOyXkCDrlLDrpbggQVBJIOuwjyDsmIjsmbgg7LKY66asIOuztOyZhCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn642w7J207YSw67Kg7J207IqkIOyjvOyalCDsoJXrs7TsnZggU0VFRCDslZTtmLjtmZQg7KCB7JqpIOuwjyDslZTtmLjtmZTCt+uzte2YuO2ZlCDsspjrpqwg66Gc7KeBIOyImOyglScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7J247KadIOyLnO2XmOyXkOyEnCDrsJzqsqzrkJwg6rKw7ZWoIOyImOyglSDrsI8g7J6s6rKA7KadJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdXaW5kb3dzIFNjaGVkdWxlcuulvCDtmZzsmqntlZwg7ZSE66Gc6re4656oIOyekOuPmSDsi6Ttlokg7ZmY6rK9IOq1rOyEsScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7J6s64KcIOyYiMK36rK967O0IO2UjOueq+2PvCDqsJzrsJwg67CPIOycoOyngOuztOyImCcsXHJcbiAgICAgIHdoZXJlOiAn7ZWc6rWt7JWE7J207Jik7Yuw6riw7Iig7JuQJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyMi0wOScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI0LTAxJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ0phdmEgVENQIFNvY2tldOydhCDtmZzsmqntlZwg7ZaJ7JWI67aAIOyghOq0ke2MkCDthrXsi6Ag6riw64qlIOq1rO2YhCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnS0lU67C466asIOyerOuCnCDrsKnshqEgQ0FQIO2UhOuhnO2GoOy9nCDsl7Dqs4QgKFhNTCDslpHsi50pJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfri6TsmKjsi5zsiqTthZwg7KCE6rSR7YyQIOuwjyDqs7Xso7zsi5wgQklTIOyXsOuPmScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnS1Qg7Iqk66eI7Yq466mU7Iuc7KeAIOuwjyDsnbjtj6zrsYXtgawgU01TIOyXsOuPmScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnTGludXgg7ISc67KEIOy0iOq4sCDshLjtjIUg67CPIOyVoO2UjOumrOy8gOydtOyFmCDsi6Ttlokg7ZmY6rK9IOq1rOyEsScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUEhQIOyLnOyKpO2FnOydmCBTcHJpbmcgQm9vdCDsoITtmZgnLFxyXG4gICAgICB3aGVyZTogJ+2VnOq1reyVhOydtOyYpO2LsOq4sOyIoOybkCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjItMDknLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyMi0xMicsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdQSFAg6riw67CYIOyLnOyKpO2FnOydhCBKYXZhwrdTcHJpbmcgQm9vdCDquLDrsJggUkVTVCBBUEkg6rWs7KGw66GcIOyghO2ZmCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=