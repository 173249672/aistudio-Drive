import React from 'react';

export interface FileData {
  id: string;
  name: string;
  type: 'pdf' | 'zip' | 'doc' | 'folder' | 'image' | 'spreadsheet' | 'analytics';
  owner: string;
  time: string;
  starred?: boolean;
  previewUrl?: string;
}

export const SUGGESTED_FILES: FileData[] = [
  {
    id: 's1',
    name: '2024 年度财务报告.pdf',
    type: 'pdf',
    owner: '您',
    time: '刚刚',
    previewUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQNJ0p5YQt73IueLNyV74mbZePhV1QaZR-GyZ0fk_Vk6EnpZboCFdKfWq5oScXDGpod6A-AMv0KQDl-Kzov6v1SrFkv-mxs7isr6xDADlm6BxncmgtMzUEWmwJ7SgNKXCngHVacfdddFp_31KYAE8nwgHjVq4oMlQELY3bgB4fordI1WfHDCDoAl2Whtxj-KQi5dwnIobW5E1eBo0BwhCO1PcBAiGn2jrKFwaQMAGg_WhJ2dZMDEb-OaxttYV4YO_g9UbIuSQ35b4'
  },
  {
    id: 's2',
    name: '市场调研分析 - Q3',
    type: 'analytics',
    owner: '王经理',
    time: '共享自',
    previewUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4he5v_MQWQHdMhJ4J8Umlo2_SzbaZjA9PIkD2x0RdKzWuYfEZMkSgFcdfgmsD6gTSBskJmzOJqR1OtiPmX92WHj5KFVnikcWPezN2QfR4FYGYHMWH7UJEb_eJgss1jAq0gKoZ98wJe9BQ3QrxAwE5Kw3H4ATw9H5MGxuBI02ZxPTSwECZYSh7awMKdqTLk_igqfRYVrEb6a9Be2uxv5jNKSnsLCo4gllmVMPJys_enfWb5cmivYreccu89_V5Hd5nUYbb_RZDskQ'
  }
];

export const SHARED_FILES: FileData[] = [
  { id: '1', name: '2024 年度产品设计提案.pdf', type: 'pdf', owner: '张小明', time: '2 小时前' },
  { id: '2', name: '品牌视觉系统 V2.zip', type: 'zip', owner: '李华', time: '昨天' },
  { id: '3', name: 'Q3 季度财务报告草案', type: 'doc', owner: '王总', time: '星期二', starred: true },
  { id: '4', name: '2023 团建照片', type: 'folder', owner: 'HR 部门', time: '2023年12月15日' }
];

export const ALL_FILES: FileData[] = [
  { id: 'f1', name: '产品设计稿 - 2024', type: 'folder', owner: '您', time: '2024年10月24日' },
  { id: 'f2', name: '核心功能路线图.docx', type: 'doc', owner: '您', time: '2 小时前' },
  { id: 'f3', name: '品牌配色方案.png', type: 'image', owner: '您', time: '昨天' },
  { id: 'f4', name: '个人照片备份', type: 'folder', owner: '您', time: '2023年12月15日' },
  { id: 'f5', name: '季度预算明细.xlsx', type: 'spreadsheet', owner: '您', time: '2024年8月12日' }
];
