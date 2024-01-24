module.exports = ((()=>{
  let supportLang = [
    'en',
    'zh',
    // vi,
    // ko,
  ]

  let localesConfig = {
    default: {
      locales: {
        lang: 'en-US',
        title: 'Cytoid Wiki',
        description: 'A wiki for Cytoid and powered by community.'
      },
      themeLocales: {
        label: 'Auto',
        selectText: '',
        ariaLabel: '',
        editLinkText: '',
        lastUpdated: ''
      }
    },
    en: {
      locales: {
        lang: 'en-US',
        title: 'Cytoid Wiki',
        description: 'A wiki for Cytoid and powered by community.'
      },
      themeLocales: {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Update',
        author: 'Author',
        notFinish: 'Hmm... Something went wrong? Please wait... We have not done yet :(',
        footer:  `<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span>
                  <span>Written by Discord Community and Localizers.</span>
                  <span>This site is the community wiki of <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> built by <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> and <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span>
                  `,
        nav: require('./nav/en'),
        sidebar: require('./sidebar/en')
      }
    },
    zh: {
      locales: {
        lang: 'zh-Hans',
        title: 'Cytoid Wiki',
        description: '社区驱动的 Cytoid Wiki.'
      },
      themeLocales: {
        label: '中文',
        selectText: '语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑',
        lastUpdated: '上次编辑',
        author: '作者',
        notFinish: '还没做完, 再咕咕咕一会(',
        footer:  `<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span>
                  <span>Written by Discord Community and Localizers.</span>
                  <span>This site is the community wiki of <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> built by <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> and <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span>
                  `,
        nav: require('./nav/zh'),
        sidebar: require('./sidebar/zh')
      }
    },
    vi: {
      locales: {
        lang: 'vi',
        title: 'Cytoid Wiki',
        description: 'Một "trạm đỗ xe" dành cho Cytoid bởi cộng đồng!'
      },
      themeLocales: {
        label: 'Tiếng Việt',
        selectText: 'Ngôn ngữ',
        ariaLabel: 'Chọn ngôn ngữ',
        editLinkText: 'Chỉnh sửa bài viết này trên Github',
        lastUpdated: 'Cập nhật lần cuối vào',
        author: 'Được viết bởi:',
        notFinish: 'Hmm... Không có nội dung gì cả! ... Xin vui lòng chờ, bài viết này chưa hoàn thành đâu!',
        footer:  `<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. Toàn quyền bảo lưu.</span>
                  <span>Được tạo ra bởi cộng đồng Cytoid trên Discord.</span>
                  <span>Đây là trang wiki của cộng đồng <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a>, được phát triển bởi <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> và <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span>
                  `,
        nav: require('./nav/vi'),
        sidebar: require('./sidebar/vi')
      }
    },
    ko: {
      locales: {
        lang: 'ko',
        title: 'Cytoid Wiki',
        description: 'A wiki for Cytoid and powered by community.'
      },
      themeLocales: {
        label: '한국어',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Update',
        author: 'Author',
        notFinish: 'Hmm... Something went wrong? Please wait... We have not done yet :(',
        footer:  `<span><a href="https://github.com/CytoidCommunity/Cytoid-wiki"><strong>Cytoid Wiki Team</strong></a> ©2020. All rights reserved.</span>
                  <span>Written by Discord Community and Localizers.</span>
                  <span>This site is the community wiki of <a href="https://cytoid.io/" class=""><strong>Cytoid</strong></a> built by <a href="https://cytoid.io/profile/tigerhix" class=""><strong>TigerHix</strong></a> and <a href="https://cytoid.io/profile/neo" class=""><strong>Neo</strong></a>.</span>
                  `,
        nav: require('./nav/ko'),
        sidebar: require('./sidebar/ko')
      }
    }
  }


  let locales = {
    '/': localesConfig.default.locales
  }
  let themeLocales = {
    '/': localesConfig.default.themeLocales
  }

  for (let lang of supportLang) {
    locales[`/${lang}/`] = localesConfig[lang].locales
    themeLocales[`/${lang}/`] = localesConfig[lang].themeLocales
  }

  return {locales, themeLocales}
})())