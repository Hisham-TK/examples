export interface DefaultConfig {
  payment: {
    // merchantId: number;
    merchantEmail: string;
    secretKey: string;
    websiteUrl: string;
  };
}

const config: DefaultConfig = {
  payment: {
    // merchantId: 10060636,
    merchantEmail: 'mr.hesham.taha.work+0@gmail.com',
    secretKey: '9VuLtQ78zl0qrckBmvIrswv59KezLwEVs9GVZO4z95ZAhkcEPU5hrBnBmBb88P3BYJxYxBxGGxhYRtCHoIZQkmsGYDP7sSIrCfqa',
    websiteUrl: 'https://indexgroup.net/',

    // 'VuLtQ78zl0qrckBmvIrswv59KezLwEVs9GVZO4z95ZAhkcEPU5hrBnBmBb88P3BYJxYxBxGGxhYRtCHoIZQkmsGYDP7sSIrCfqa',
  },
};
export default config;
