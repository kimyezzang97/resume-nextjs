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
      content: '표준단어·도메인·표준용어 관리와 버전업 관련 기능 개발'
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
    title: '재난 예·경보 플랫폼 GS 인증 대응 및 보안 개선',
    where: '한국아이오티기술원',
    startedAt: '2023-07',
    endedAt: '2023-08',
    descriptions: [{
      content: 'GS 인증 기준에 따른 API 및 예외 처리 보완'
    }, {
      content: '데이터베이스 주요 정보의 SEED 암호화 적용 및 암호화·복호화 처리 로직 수정'
    }, {
      content: '인증 시험에서 발견된 결함 수정 및 재검증'
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
    }, {
      content: 'Windows Scheduler를 활용한 프로그램 자동 실행 환경 구성'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwid2hlcmUiLCJzdGFydGVkQXQiLCJlbmRlZEF0IiwiZGVzY3JpcHRpb25zIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLCtCQURUO0FBRUVDLFNBQUssRUFBRSxTQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0FESSxFQWtCSjtBQUNFTCxTQUFLLEVBQUUsMkJBRFQ7QUFFRUMsU0FBSyxFQUFFLE1BRlQ7QUFHRUMsYUFBUyxFQUFFLFNBSGI7QUFJRUMsV0FBTyxFQUFFLFNBSlg7QUFLRUMsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLGFBQU8sRUFBRTtBQURYLEtBRFksRUFJWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQUpZLEVBT1o7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FQWSxFQVVaO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBVlk7QUFMaEIsR0FsQkksRUFzQ0o7QUFDRUwsU0FBSyxFQUFFLGdCQURUO0FBRUVDLFNBQUssRUFBRSxNQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0F0Q0ksRUF1REo7QUFDRUwsU0FBSyxFQUFFLDhCQURUO0FBRUVDLFNBQUssRUFBRSxXQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0F2REksRUF3RUo7QUFDRUwsU0FBSyxFQUFFLHVCQURUO0FBRUVDLFNBQUssRUFBRSxXQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFksRUFVWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQVZZLEVBYVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FiWSxFQWdCWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQWhCWTtBQUxoQixHQXhFSSxFQWtHSjtBQUNFTCxTQUFLLEVBQUUseUJBRFQ7QUFFRUMsU0FBSyxFQUFFLFdBRlQ7QUFHRUMsYUFBUyxFQUFFLFNBSGI7QUFJRUMsV0FBTyxFQUFFLFNBSlg7QUFLRUMsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLGFBQU8sRUFBRTtBQURYLEtBRFk7QUFMaEIsR0FsR0k7QUFGMEIsQ0FBbEM7QUFrSGVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ4Y2E3OGI3NzZlYmRhOTJjNDZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJvamVjdCB9IGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0L0lQcm9qZWN0JztcclxuXHJcbmNvbnN0IHByb2plY3Q6IElQcm9qZWN0LlBheWxvYWQgPSB7XHJcbiAgZGlzYWJsZTogZmFsc2UsXHJcbiAgbGlzdDogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+y9lOyYpOuhsSBEYXRhV2FyZShNRVRBIykg7IaU66Oo7IWYIOyXheq3uOugiOydtOuTnCcsXHJcbiAgICAgIHdoZXJlOiAn7Jyg64uI7Jio7Iuc7Iqk7YWc7KaIJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNi0wMycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI2LTA4JyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+q4sOyhtCDshpTro6jshZjsnZgg7IaM7IqkIOq1rOyhsCDrsI8g7KO87JqUIOq4sOuKpSDrtoTshJ0sIOyLoOq3nCDrsoTsoITsl5Ag66ee7LaYIOy9lOuTnCDsiJjsoJUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ0V4dCBKUyDquLDrsJgg7ZmU66m0IOq4sOuKpSDsiJjsoJUg67CPIOuwseyXlOuTnCBBUEkg7Jew64+ZJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICftkZzspIDri6jslrTCt+uPhOuplOyduMK37ZGc7KSA7Jqp7Ja0IOq0gOumrOyZgCDrsoTsoITsl4Ug6rSA66CoIOq4sOuKpSDqsJzrsJwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+yCvOyEseyghOyekCBOZXh0IE1PU0FJQyDshKTrrLjsobDsgqwg7Iuc7Iqk7YWcJyxcclxuICAgICAgd2hlcmU6ICfthqDrnbzsm6jslrQnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI1LTA1JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjYtMDMnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7IK87ISx7KCE7J6QIE5leHQgTU9TQUlDOiDshKTrrLjsobDsgqwg67CPIOqzteyngOyCrO2VrSBSRVNUIEFQSSDqsJzrsJwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ1Z1ZSDtmZTrqbTqs7wgU3ByaW5nIEJvb3Qg67Cx7JeU65OcIEFQSSDsl7Drj5knLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yCvOyEsVNEUyBMTE0g7YyA6rO8IO2YkeyXhe2VmOyXrCBBSSBBUEkg6riw64qlIOuwjyDthrXtlanqsoDsg4kg7J24642x7IuxIOyXsOuPmScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnU29uYXJRdWJl66W8IO2ZnOyaqe2VnCDsoJXsoIEg67aE7ISdIO2FjOyKpO2KuCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7ZmU64+Z64u37Lu0wrftmZTrj5nsmKXshZgg7Jyg7KeA67O07IiYJyxcclxuICAgICAgd2hlcmU6ICfthqDrnbzsm6jslrQnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI1LTAyJyxcclxuICAgICAgZW5kZWRBdDogJzIwMjUtMDQnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ZmU64+Z64u37Lu0wrftmZTrj5nsmKXshZg6IFNwcmluZ8K3SlNQIOq4sOuwmCDtmZTrqbQg67CPIOq4sOyhtCDquLDriqUg7Jyg7KeA67O07IiYJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsmrTsmIEg7JqU7LKt7JeQIOuUsOuluCBKU1Ag7ZmU66m0IOuwjyDtlITroaDtirjsl5Trk5wg7L2U65OcIOyImOyglScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7KCV6riwIOuniOy8gO2MhSDrqZTsnbzsnZggSFRNTCDsvZjthZDsuKDsmYAg67Cc7IahIOq0gOugqCDsvZTrk5wg7IiY7KCVJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfsnqzrgpwg7JiIwrfqsr3rs7Qg7ZSM656r7Y+8IEdTIOyduOymnSDrjIDsnZEg67CPIOuztOyViCDqsJzshKAnLFxyXG4gICAgICB3aGVyZTogJ+2VnOq1reyVhOydtOyYpO2LsOq4sOyIoOybkCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjMtMDcnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyMy0wOCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdHUyDsnbjspp0g6riw7KSA7JeQIOuUsOuluCBBUEkg67CPIOyYiOyZuCDsspjrpqwg67O07JmEJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfrjbDsnbTthLDrsqDsnbTsiqQg7KO87JqUIOygleuztOydmCBTRUVEIOyVlO2YuO2ZlCDsoIHsmqkg67CPIOyVlO2YuO2ZlMK367O17Zi47ZmUIOyymOumrCDroZzsp4Eg7IiY7KCVJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsnbjspp0g7Iuc7ZeY7JeQ7IScIOuwnOqyrOuQnCDqsrDtlagg7IiY7KCVIOuwjyDsnqzqsoDspp0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+yerOuCnCDsmIjCt+qyveuztCDtlIzrnqvtj7wg6rCc67CcIOuwjyDsnKDsp4Drs7TsiJgnLFxyXG4gICAgICB3aGVyZTogJ+2VnOq1reyVhOydtOyYpO2LsOq4sOyIoOybkCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjItMDknLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNC0wMScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdKYXZhIFRDUCBTb2NrZXTsnYQg7Zmc7Jqp7ZWcIO2WieyViOu2gCDsoITqtJHtjJAg7Ya17IugIOq4sOuKpSDqtaztmIQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ0tJVOuwuOumrCDsnqzrgpwg67Cp7IahIENBUCDtlITroZzthqDsvZwg7Jew6rOEIChYTUwg7JaR7IudKScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn64uk7Jio7Iuc7Iqk7YWcIOyghOq0ke2MkCDrsI8g6rO17KO87IucIEJJUyDsl7Drj5knLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ0tUIOyKpOuniO2KuOuplOyLnOyngCDrsI8g7J247Y+s67GF7YGsIFNNUyDsl7Drj5knLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ0xpbnV4IOyEnOuyhCDstIjquLAg7IS47YyFIOuwjyDslaDtlIzrpqzsvIDsnbTshZgg7Iuk7ZaJIO2ZmOqyvSDqtazshLEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ1dpbmRvd3MgU2NoZWR1bGVy66W8IO2ZnOyaqe2VnCDtlITroZzqt7jrnqgg7J6Q64+ZIOyLpO2WiSDtmZjqsr0g6rWs7ISxJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdQSFAg7Iuc7Iqk7YWc7J2YIFNwcmluZyBCb290IOyghO2ZmCcsXHJcbiAgICAgIHdoZXJlOiAn7ZWc6rWt7JWE7J207Jik7Yuw6riw7Iig7JuQJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyMi0wOScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDIyLTEyJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ1BIUCDquLDrsJgg7Iuc7Iqk7YWc7J2EIEphdmHCt1NwcmluZyBCb290IOq4sOuwmCBSRVNUIEFQSSDqtazsobDroZwg7KCE7ZmYJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==