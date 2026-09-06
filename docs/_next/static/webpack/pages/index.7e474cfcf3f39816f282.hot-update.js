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
    "title": "재난 예·경보 플랫폼 GS 인증 대응 및 보안 개선",
    "where": "한국아이오티기술원",
    "startedAt": "2023-07",
    "endedAt": "2023-08",
    "descriptions": [{
      "content": "GS 인증 기준에 따른 API 및 예외 처리 보완"
    }, {
      "content": "데이터베이스 주요 정보의 SEED 암호화 적용 및 암호화·복호화 처리 로직 수정"
    }, {
      "content": "인증 시험에서 발견된 결함 수정 및 재검증"
    }]
  }, {
    "title": "재난 예·경보 플랫폼 개발 및 유지보수",
    "where": "한국아이오티기술원",
    "startedAt": "2022-09",
    "endedAt": "2024-01",
    "descriptions": [{
      "content": "Java TCP Socket을 활용한 행안부 전광판 통신 기능 구현"
    }, {
      "content": "KIT밸리 재난 방송 CAP 프로토콜 연계 (XML 양식)"
    }, {
      "content": "다온시스템 전광판 및 공주시 BIS 연동"
    }, {
      "content": "KT 스마트메시지 및 인포뱅크 SMS 연동"
    }, {
      "content": "Linux 서버 초기 세팅 및 애플리케이션 실행 환경 구성"
    }, {
      "content": "Windows Scheduler를 활용한 프로그램 자동 실행 환경 구성"
    }]
  }, {
    "title": "PHP 시스템의 Spring Boot 전환",
    "where": "한국아이오티기술원",
    "startedAt": "2022-09",
    "endedAt": "2022-12",
    "descriptions": [{
      "content": "PHP 기반 시스템을 Java·Spring Boot 기반 REST API 구조로 전환"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwid2hlcmUiLCJzdGFydGVkQXQiLCJlbmRlZEF0IiwiZGVzY3JpcHRpb25zIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLCtCQURUO0FBRUVDLFNBQUssRUFBRSxTQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0FESSxFQWtCSjtBQUNFTCxTQUFLLEVBQUUsMkJBRFQ7QUFFRUMsU0FBSyxFQUFFLE1BRlQ7QUFHRUMsYUFBUyxFQUFFLFNBSGI7QUFJRUMsV0FBTyxFQUFFLFNBSlg7QUFLRUMsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLGFBQU8sRUFBRTtBQURYLEtBRFksRUFJWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQUpZLEVBT1o7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FQWSxFQVVaO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBVlk7QUFMaEIsR0FsQkksRUFzQ0o7QUFDRUwsU0FBSyxFQUFFLGdCQURUO0FBRUVDLFNBQUssRUFBRSxNQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0F0Q0ksRUF1RFI7QUFDRSxhQUFTLDhCQURYO0FBRUUsYUFBUyxXQUZYO0FBR0UsaUJBQWEsU0FIZjtBQUlFLGVBQVcsU0FKYjtBQUtFLG9CQUFnQixDQUNkO0FBQ0UsaUJBQVc7QUFEYixLQURjLEVBSWQ7QUFDRSxpQkFBVztBQURiLEtBSmMsRUFPZDtBQUNFLGlCQUFXO0FBRGIsS0FQYztBQUxsQixHQXZEUSxFQXdFUjtBQUNFLGFBQVMsdUJBRFg7QUFFRSxhQUFTLFdBRlg7QUFHRSxpQkFBYSxTQUhmO0FBSUUsZUFBVyxTQUpiO0FBS0Usb0JBQWdCLENBQ2Q7QUFDRSxpQkFBVztBQURiLEtBRGMsRUFJZDtBQUNFLGlCQUFXO0FBRGIsS0FKYyxFQU9kO0FBQ0UsaUJBQVc7QUFEYixLQVBjLEVBVWQ7QUFDRSxpQkFBVztBQURiLEtBVmMsRUFhZDtBQUNFLGlCQUFXO0FBRGIsS0FiYyxFQWdCZDtBQUNFLGlCQUFXO0FBRGIsS0FoQmM7QUFMbEIsR0F4RVEsRUFrR1I7QUFDRSxhQUFTLHlCQURYO0FBRUUsYUFBUyxXQUZYO0FBR0UsaUJBQWEsU0FIZjtBQUlFLGVBQVcsU0FKYjtBQUtFLG9CQUFnQixDQUNkO0FBQ0UsaUJBQVc7QUFEYixLQURjO0FBTGxCLEdBbEdRO0FBRjBCLENBQWxDO0FBa0hlUixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZTQ3NGNmY2YzZjM5ODE2ZjI4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb2plY3QgfSBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdC9JUHJvamVjdCc7XHJcblxyXG5jb25zdCBwcm9qZWN0OiBJUHJvamVjdC5QYXlsb2FkID0ge1xyXG4gIGRpc2FibGU6IGZhbHNlLFxyXG4gIGxpc3Q6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfsvZTsmKTrobEgRGF0YVdhcmUoTUVUQSMpIOyGlOujqOyFmCDsl4Xqt7jroIjsnbTrk5wnLFxyXG4gICAgICB3aGVyZTogJ+ycoOuLiOyYqOyLnOyKpO2FnOymiCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjYtMDMnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNi0wOCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfquLDsobQg7IaU66Oo7IWY7J2YIOyGjOyKpCDqtazsobAg67CPIOyjvOyalCDquLDriqUg67aE7ISdLCDsi6Dqt5wg67KE7KCE7JeQIOunnuy2mCDsvZTrk5wg7IiY7KCVJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdFeHQgSlMg6riw67CYIO2ZlOuptCDquLDriqUg7IiY7KCVIOuwjyDrsLHsl5Trk5wgQVBJIOyXsOuPmScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ZGc7KSA64uo7Ja0wrfrj4TrqZTsnbjCt+2RnOykgOyaqeyWtCDqtIDrpqzsmYAg67KE7KCE7JeFIOq0gOugqCDquLDriqUg6rCc67CcJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfsgrzshLHsoITsnpAgTmV4dCBNT1NBSUMg7ISk66y47KGw7IKsIOyLnOyKpO2FnCcsXHJcbiAgICAgIHdoZXJlOiAn7Yag65287Juo7Ja0JyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wNScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI2LTAzJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yCvOyEseyghOyekCBOZXh0IE1PU0FJQzog7ISk66y47KGw7IKsIOuwjyDqs7Xsp4Dsgqztla0gUkVTVCBBUEkg6rCc67CcJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdWdWUg7ZmU66m06rO8IFNwcmluZyBCb290IOuwseyXlOuTnCBBUEkg7Jew64+ZJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsgrzshLFTRFMgTExNIO2MgOqzvCDtmJHsl4XtlZjsl6wgQUkgQVBJIOq4sOuKpSDrsI8g7Ya17ZWp6rKA7IOJIOyduOuNseyLsSDsl7Drj5knLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ1NvbmFyUXViZeulvCDtmZzsmqntlZwg7KCV7KCBIOu2hOyEnSDthYzsiqTtirgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+2ZlOuPmeuLt+y7tMK37ZmU64+Z7Jil7IWYIOycoOyngOuztOyImCcsXHJcbiAgICAgIHdoZXJlOiAn7Yag65287Juo7Ja0JyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wMicsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTA0JyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+2ZlOuPmeuLt+y7tMK37ZmU64+Z7Jil7IWYOiBTcHJpbmfCt0pTUCDquLDrsJgg7ZmU66m0IOuwjyDquLDsobQg6riw64qlIOycoOyngOuztOyImCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7Jq07JiBIOyalOyyreyXkCDrlLDrpbggSlNQIO2ZlOuptCDrsI8g7ZSE66Gg7Yq47JeU65OcIOy9lOuTnCDsiJjsoJUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+ygleq4sCDrp4jsvIDtjIUg66mU7J287J2YIEhUTUwg7L2Y7YWQ7Lig7JmAIOuwnOyGoSDqtIDroKgg7L2U65OcIOyImOyglScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbntcclxuICBcInRpdGxlXCI6IFwi7J6s64KcIOyYiMK36rK967O0IO2UjOueq+2PvCBHUyDsnbjspp0g64yA7J2RIOuwjyDrs7TslYgg6rCc7ISgXCIsXHJcbiAgXCJ3aGVyZVwiOiBcIu2VnOq1reyVhOydtOyYpO2LsOq4sOyIoOybkFwiLFxyXG4gIFwic3RhcnRlZEF0XCI6IFwiMjAyMy0wN1wiLFxyXG4gIFwiZW5kZWRBdFwiOiBcIjIwMjMtMDhcIixcclxuICBcImRlc2NyaXB0aW9uc1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29udGVudFwiOiBcIkdTIOyduOymnSDquLDspIDsl5Ag65Sw66W4IEFQSSDrsI8g7JiI7Jm4IOyymOumrCDrs7TsmYRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb250ZW50XCI6IFwi642w7J207YSw67Kg7J207IqkIOyjvOyalCDsoJXrs7TsnZggU0VFRCDslZTtmLjtmZQg7KCB7JqpIOuwjyDslZTtmLjtmZTCt+uzte2YuO2ZlCDsspjrpqwg66Gc7KeBIOyImOyglVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbnRlbnRcIjogXCLsnbjspp0g7Iuc7ZeY7JeQ7IScIOuwnOqyrOuQnCDqsrDtlagg7IiY7KCVIOuwjyDsnqzqsoDspp1cIlxyXG4gICAgfVxyXG4gIF1cclxufSxcclxue1xyXG4gIFwidGl0bGVcIjogXCLsnqzrgpwg7JiIwrfqsr3rs7Qg7ZSM656r7Y+8IOqwnOuwnCDrsI8g7Jyg7KeA67O07IiYXCIsXHJcbiAgXCJ3aGVyZVwiOiBcIu2VnOq1reyVhOydtOyYpO2LsOq4sOyIoOybkFwiLFxyXG4gIFwic3RhcnRlZEF0XCI6IFwiMjAyMi0wOVwiLFxyXG4gIFwiZW5kZWRBdFwiOiBcIjIwMjQtMDFcIixcclxuICBcImRlc2NyaXB0aW9uc1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29udGVudFwiOiBcIkphdmEgVENQIFNvY2tldOydhCDtmZzsmqntlZwg7ZaJ7JWI67aAIOyghOq0ke2MkCDthrXsi6Ag6riw64qlIOq1rO2YhFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbnRlbnRcIjogXCJLSVTrsLjrpqwg7J6s64KcIOuwqeyGoSBDQVAg7ZSE66Gc7Yag7L2cIOyXsOqzhCAoWE1MIOyWkeyLnSlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb250ZW50XCI6IFwi64uk7Jio7Iuc7Iqk7YWcIOyghOq0ke2MkCDrsI8g6rO17KO87IucIEJJUyDsl7Drj5lcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb250ZW50XCI6IFwiS1Qg7Iqk66eI7Yq466mU7Iuc7KeAIOuwjyDsnbjtj6zrsYXtgawgU01TIOyXsOuPmVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbnRlbnRcIjogXCJMaW51eCDshJzrsoQg7LSI6riwIOyEuO2MhSDrsI8g7JWg7ZSM66as7LyA7J207IWYIOyLpO2WiSDtmZjqsr0g6rWs7ISxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29udGVudFwiOiBcIldpbmRvd3MgU2NoZWR1bGVy66W8IO2ZnOyaqe2VnCDtlITroZzqt7jrnqgg7J6Q64+ZIOyLpO2WiSDtmZjqsr0g6rWs7ISxXCJcclxuICAgIH1cclxuICBdXHJcbn0sXHJcbntcclxuICBcInRpdGxlXCI6IFwiUEhQIOyLnOyKpO2FnOydmCBTcHJpbmcgQm9vdCDsoITtmZhcIixcclxuICBcIndoZXJlXCI6IFwi7ZWc6rWt7JWE7J207Jik7Yuw6riw7Iig7JuQXCIsXHJcbiAgXCJzdGFydGVkQXRcIjogXCIyMDIyLTA5XCIsXHJcbiAgXCJlbmRlZEF0XCI6IFwiMjAyMi0xMlwiLFxyXG4gIFwiZGVzY3JpcHRpb25zXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb250ZW50XCI6IFwiUEhQIOq4sOuwmCDsi5zsiqTthZzsnYQgSmF2YcK3U3ByaW5nIEJvb3Qg6riw67CYIFJFU1QgQVBJIOq1rOyhsOuhnCDsoITtmZhcIlxyXG4gICAgfVxyXG4gIF1cclxufSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==