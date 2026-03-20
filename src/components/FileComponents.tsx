import React from 'react';
import { FileData } from '../types';

const getIcon = (type: FileData['type']) => {
  switch (type) {
    case 'pdf': return { icon: 'picture_as_pdf', color: 'bg-red-50 text-error' };
    case 'zip': return { icon: 'inventory_2', color: 'bg-blue-50 text-primary' };
    case 'doc': return { icon: 'article', color: 'bg-primary-fixed/30 text-primary' };
    case 'folder': return { icon: 'folder', color: 'bg-secondary-container/30 text-secondary' };
    case 'image': return { icon: 'image', color: 'bg-tertiary-fixed/30 text-tertiary' };
    case 'spreadsheet': return { icon: 'table_chart', color: 'bg-emerald-100 text-emerald-700' };
    case 'analytics': return { icon: 'analytics', color: 'bg-orange-50 text-orange-600' };
    default: return { icon: 'description', color: 'bg-surface-container-highest text-on-surface-variant' };
  }
};

export const FileItem: React.FC<{ file: FileData }> = ({ file }) => {
  const { icon, color } = getIcon(file.type);
  
  return (
    <div className="group flex items-center p-3 rounded-xl hover:bg-surface-container transition-all duration-300 cursor-pointer">
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${color} mr-4`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-on-surface font-medium truncate">{file.name}</p>
        <p className="text-[11px] text-outline">
          {file.owner} · {file.time}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <button className={`p-2 rounded-full hover:bg-outline-variant/20 transition-colors ${file.starred ? 'text-primary' : 'text-on-surface-variant/60'}`}>
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `'FILL' ${file.starred ? 1 : 0}` }}>
            star
          </span>
        </button>
        <button className="p-2 text-on-surface-variant/60 hover:text-on-surface transition-colors rounded-full">
          <span className="material-symbols-outlined text-[20px]">more_vert</span>
        </button>
      </div>
    </div>
  );
};

export const SuggestedCard: React.FC<{ file: FileData }> = ({ file }) => {
  const { icon, color } = getIcon(file.type);

  return (
    <div className="flex-shrink-0 w-64 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10 group cursor-pointer hover:shadow-md transition-all duration-300">
      <div className="h-32 bg-surface-container-low flex items-center justify-center overflow-hidden">
        {file.previewUrl ? (
          <img 
            src={file.previewUrl} 
            alt={file.name} 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className={`material-symbols-outlined text-5xl ${color.split(' ')[1]}`}>{icon}</span>
        )}
      </div>
      <div className="p-3 flex items-center gap-3">
        <span className={`material-symbols-outlined ${color.split(' ')[1]}`} style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
        <div className="truncate">
          <p className="text-sm font-bold truncate">{file.name}</p>
          <p className="text-[10px] text-outline">{file.time}{file.owner === '您' ? '由您打开' : `自 ${file.owner}`}</p>
        </div>
      </div>
    </div>
  );
};
