import { ReactNode } from 'react';

type BadgeType = 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | undefined;

interface BadgeProps {
  type?: BadgeType;
  children?: ReactNode;
}

export const Badge = ({ type, children }: BadgeProps) => {
  const getClassName = (type: BadgeType) => {
    switch (type) {
      case 'red':
        return 'bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900';
      case 'green':
        return 'bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900';
      case 'indigo':
        return 'bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900';
      case 'purple':
        return 'bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900';
      default:
        return 'bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800';
    }
  };

  return <span className={getClassName(type)}>{children}</span>;
};

export default Badge;
