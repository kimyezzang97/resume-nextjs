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
    title: '재난 예·경보 플랫폼 개발 및 유지보수',
    where: '한국아이오티기술원',
    startedAt: '2022-10',
    endedAt: '2024-01',
    descriptions: [{
      "content": "PHP 시스템의 Spring Boot 전환",
      "weight": "BOLD",
      "descriptions": [{
        "content": "PHP 기반 시스템을 Java·Spring Boot 기반 REST API 구조로 전환"
      }]
    }, {
      "content": "외부 장비 및 공공 시스템 연동",
      "weight": "BOLD",
      "descriptions": [{
        "content": "Java TCP Socket을 활용한 행안부 전광판 통신 기능 구현"
      }, {
        "content": "KIT밸리 재난 방송 CAP 프로토콜 연계 (XML 양식)"
      }, {
        "content": "다온시스템 전광판 및 공주시 BIS 연동"
      }, {
        "content": "KT 스마트메시지 및 인포뱅크 SMS 연동"
      }]
    }, {
      "content": "GS 인증 대응 및 보안 개선",
      "weight": "BOLD",
      "descriptions": [{
        "content": "GS 인증 기준에 따른 API 및 예외 처리 보완"
      }, {
        "content": "데이터베이스 주요 정보의 SEED 암호화 적용 및 암호화·복호화 처리 로직 수정"
      }, {
        "content": "인증 시험에서 발견된 결함 수정 및 재검증"
      }]
    }, {
      "content": "서버 및 실행 환경 구성",
      "weight": "BOLD",
      "descriptions": [{
        "content": "Linux 서버 초기 세팅 및 애플리케이션 실행 환경 구성"
      }, {
        "content": "Windows Scheduler를 활용한 프로그램 자동 실행 환경 구성"
      }]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwid2hlcmUiLCJzdGFydGVkQXQiLCJlbmRlZEF0IiwiZGVzY3JpcHRpb25zIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLCtCQURUO0FBRUVDLFNBQUssRUFBRSxTQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0FESSxFQWtCSjtBQUNFTCxTQUFLLEVBQUUsMkJBRFQ7QUFFRUMsU0FBSyxFQUFFLE1BRlQ7QUFHRUMsYUFBUyxFQUFFLFNBSGI7QUFJRUMsV0FBTyxFQUFFLFNBSlg7QUFLRUMsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLGFBQU8sRUFBRTtBQURYLEtBRFksRUFJWjtBQUNFQSxhQUFPLEVBQUU7QUFEWCxLQUpZLEVBT1o7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FQWSxFQVVaO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBVlk7QUFMaEIsR0FsQkksRUFzQ0o7QUFDRUwsU0FBSyxFQUFFLGdCQURUO0FBRUVDLFNBQUssRUFBRSxNQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUU7QUFEWCxLQURZLEVBSVo7QUFDRUEsYUFBTyxFQUFFO0FBRFgsS0FKWSxFQU9aO0FBQ0VBLGFBQU8sRUFBRTtBQURYLEtBUFk7QUFMaEIsR0F0Q0ksRUF1REo7QUFDRUwsU0FBSyxFQUFFLHVCQURUO0FBRUVDLFNBQUssRUFBRSxXQUZUO0FBR0VDLGFBQVMsRUFBRSxTQUhiO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLGdCQUFZLEVBQUUsQ0FDbEI7QUFDRSxpQkFBVyx5QkFEYjtBQUVFLGdCQUFVLE1BRlo7QUFHRSxzQkFBZ0IsQ0FDZDtBQUNFLG1CQUFXO0FBRGIsT0FEYztBQUhsQixLQURrQixFQVVsQjtBQUNFLGlCQUFXLG1CQURiO0FBRUUsZ0JBQVUsTUFGWjtBQUdFLHNCQUFnQixDQUNkO0FBQ0UsbUJBQVc7QUFEYixPQURjLEVBSWQ7QUFDRSxtQkFBVztBQURiLE9BSmMsRUFPZDtBQUNFLG1CQUFXO0FBRGIsT0FQYyxFQVVkO0FBQ0UsbUJBQVc7QUFEYixPQVZjO0FBSGxCLEtBVmtCLEVBNEJsQjtBQUNFLGlCQUFXLGtCQURiO0FBRUUsZ0JBQVUsTUFGWjtBQUdFLHNCQUFnQixDQUNkO0FBQ0UsbUJBQVc7QUFEYixPQURjLEVBSWQ7QUFDRSxtQkFBVztBQURiLE9BSmMsRUFPZDtBQUNFLG1CQUFXO0FBRGIsT0FQYztBQUhsQixLQTVCa0IsRUEyQ2xCO0FBQ0UsaUJBQVcsZUFEYjtBQUVFLGdCQUFVLE1BRlo7QUFHRSxzQkFBZ0IsQ0FDZDtBQUNFLG1CQUFXO0FBRGIsT0FEYyxFQUlkO0FBQ0UsbUJBQVc7QUFEYixPQUpjO0FBSGxCLEtBM0NrQjtBQUxoQixHQXZESTtBQUYwQixDQUFsQztBQTBIZVAsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQ3NDhiY2QyNmZjNTc3OWU0NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcm9qZWN0IH0gZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3QvSVByb2plY3QnO1xyXG5cclxuY29uc3QgcHJvamVjdDogSVByb2plY3QuUGF5bG9hZCA9IHtcclxuICBkaXNhYmxlOiBmYWxzZSxcclxuICBsaXN0OiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7L2U7Jik66GxIERhdGFXYXJlKE1FVEEjKSDshpTro6jshZgg7JeF6re466CI7J2065OcJyxcclxuICAgICAgd2hlcmU6ICfsnKDri4jsmKjsi5zsiqTthZzspognLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI2LTAzJyxcclxuICAgICAgZW5kZWRBdDogJzIwMjYtMDgnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn6riw7KG0IOyGlOujqOyFmOydmCDshozsiqQg6rWs7KGwIOuwjyDso7zsmpQg6riw64qlIOu2hOyEnSwg7Iug6recIOuyhOyghOyXkCDrp57stpgg7L2U65OcIOyImOyglScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnRXh0IEpTIOq4sOuwmCDtmZTrqbQg6riw64qlIOyImOyglSDrsI8g67Cx7JeU65OcIEFQSSDsl7Drj5knLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+2RnOykgOuLqOyWtMK364+E66mU7J24wrftkZzspIDsmqnslrQg6rSA66as7JmAIOuyhOyghOyXhSDqtIDroKgg6riw64qlIOqwnOuwnCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7IK87ISx7KCE7J6QIE5leHQgTU9TQUlDIOyEpOusuOyhsOyCrCDsi5zsiqTthZwnLFxyXG4gICAgICB3aGVyZTogJ+2GoOudvOybqOyWtCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjUtMDUnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNi0wMycsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsgrzshLHsoITsnpAgTmV4dCBNT1NBSUM6IOyEpOusuOyhsOyCrCDrsI8g6rO17KeA7IKs7ZWtIFJFU1QgQVBJIOqwnOuwnCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnVnVlIO2ZlOuptOqzvCBTcHJpbmcgQm9vdCDrsLHsl5Trk5wgQVBJIOyXsOuPmScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7IK87ISxU0RTIExMTSDtjIDqs7wg7ZiR7JeF7ZWY7JesIEFJIEFQSSDquLDriqUg67CPIO2Gte2VqeqygOyDiSDsnbjrjbHsi7Eg7Jew64+ZJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICdTb25hclF1YmXrpbwg7Zmc7Jqp7ZWcIOygleyggSDrtoTshJ0g7YWM7Iqk7Yq4JyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICftmZTrj5nri7fsu7TCt+2ZlOuPmeyYpeyFmCDsnKDsp4Drs7TsiJgnLFxyXG4gICAgICB3aGVyZTogJ+2GoOudvOybqOyWtCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjUtMDInLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNS0wNCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICftmZTrj5nri7fsu7TCt+2ZlOuPmeyYpeyFmDogU3ByaW5nwrdKU1Ag6riw67CYIO2ZlOuptCDrsI8g6riw7KG0IOq4sOuKpSDsnKDsp4Drs7TsiJgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yatOyYgSDsmpTssq3sl5Ag65Sw66W4IEpTUCDtmZTrqbQg67CPIO2UhOuhoO2KuOyXlOuTnCDsvZTrk5wg7IiY7KCVJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsoJXquLAg66eI7LyA7YyFIOuplOydvOydmCBIVE1MIOy9mO2FkOy4oOyZgCDrsJzshqEg6rSA66CoIOy9lOuTnCDsiJjsoJUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+yerOuCnCDsmIjCt+qyveuztCDtlIzrnqvtj7wg6rCc67CcIOuwjyDsnKDsp4Drs7TsiJgnLFxyXG4gICAgICB3aGVyZTogJ+2VnOq1reyVhOydtOyYpO2LsOq4sOyIoOybkCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjItMTAnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNC0wMScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gIHtcclxuICAgIFwiY29udGVudFwiOiBcIlBIUCDsi5zsiqTthZzsnZggU3ByaW5nIEJvb3Qg7KCE7ZmYXCIsXHJcbiAgICBcIndlaWdodFwiOiBcIkJPTERcIixcclxuICAgIFwiZGVzY3JpcHRpb25zXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29udGVudFwiOiBcIlBIUCDquLDrsJgg7Iuc7Iqk7YWc7J2EIEphdmHCt1NwcmluZyBCb290IOq4sOuwmCBSRVNUIEFQSSDqtazsobDroZwg7KCE7ZmYXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb250ZW50XCI6IFwi7Jm467aAIOyepeu5hCDrsI8g6rO16rO1IOyLnOyKpO2FnCDsl7Drj5lcIixcclxuICAgIFwid2VpZ2h0XCI6IFwiQk9MRFwiLFxyXG4gICAgXCJkZXNjcmlwdGlvbnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb250ZW50XCI6IFwiSmF2YSBUQ1AgU29ja2V07J2EIO2ZnOyaqe2VnCDtlonslYjrtoAg7KCE6rSR7YyQIO2GteyLoCDquLDriqUg6rWs7ZiEXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiY29udGVudFwiOiBcIktJVOuwuOumrCDsnqzrgpwg67Cp7IahIENBUCDtlITroZzthqDsvZwg7Jew6rOEIChYTUwg7JaR7IudKVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbnRlbnRcIjogXCLri6TsmKjsi5zsiqTthZwg7KCE6rSR7YyQIOuwjyDqs7Xso7zsi5wgQklTIOyXsOuPmVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbnRlbnRcIjogXCJLVCDsiqTrp4jtirjrqZTsi5zsp4Ag67CPIOyduO2PrOuxhe2BrCBTTVMg7Jew64+ZXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb250ZW50XCI6IFwiR1Mg7J247KadIOuMgOydkSDrsI8g67O07JWIIOqwnOyEoFwiLFxyXG4gICAgXCJ3ZWlnaHRcIjogXCJCT0xEXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbnRlbnRcIjogXCJHUyDsnbjspp0g6riw7KSA7JeQIOuUsOuluCBBUEkg67CPIOyYiOyZuCDsspjrpqwg67O07JmEXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiY29udGVudFwiOiBcIuuNsOydtO2EsOuyoOydtOyKpCDso7zsmpQg7KCV67O07J2YIFNFRUQg7JWU7Zi47ZmUIOyggeyaqSDrsI8g7JWU7Zi47ZmUwrfrs7XtmLjtmZQg7LKY66asIOuhnOyngSDsiJjsoJVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb250ZW50XCI6IFwi7J247KadIOyLnO2XmOyXkOyEnCDrsJzqsqzrkJwg6rKw7ZWoIOyImOyglSDrsI8g7J6s6rKA7KadXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb250ZW50XCI6IFwi7ISc67KEIOuwjyDsi6Ttlokg7ZmY6rK9IOq1rOyEsVwiLFxyXG4gICAgXCJ3ZWlnaHRcIjogXCJCT0xEXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbnRlbnRcIjogXCJMaW51eCDshJzrsoQg7LSI6riwIOyEuO2MhSDrsI8g7JWg7ZSM66as7LyA7J207IWYIOyLpO2WiSDtmZjqsr0g6rWs7ISxXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiY29udGVudFwiOiBcIldpbmRvd3MgU2NoZWR1bGVy66W8IO2ZnOyaqe2VnCDtlITroZzqt7jrnqgg7J6Q64+ZIOyLpO2WiSDtmZjqsr0g6rWs7ISxXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=