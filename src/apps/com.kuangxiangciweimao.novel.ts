import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuangxiangciweimao.novel',
  name: '刺猬猫阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[id="com.kuangxiangciweimao.novel:id/mTasksView"]',
      snapshotUrls: 'https://i.gkd.li/import/13056248',
    },
    {
      key: 1,
      name: '局部广告-阅读中-加入书架',
      desc: '点击 X',
      quickFind: true,
      activityIds:
        'com.kuangxiangciweimao.novel.activity.bookshelf.reader.ReaderActivity4',
      rules: 'ImageView[id="com.kuangxiangciweimao.novel:id/closeImg"]',
      snapshotUrls: 'https://i.gkd.li/import/15397865',
    },
    {
      key: 30,
      name: '功能类-APP自动退出',
      desc: '点击 确定',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity',
      rules: [
        {
          matches: ['TextView[text*="是否退出"]', 'TextView[text="确定"]'],
          snapshotUrls: 'https://i.gkd.li/import/15294427',
        },
      ],
    },
  ],
});
