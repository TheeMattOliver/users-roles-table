import React from 'react'
import classNames from './TableSkeleton.module.css'
import clsx from 'clsx'
export function UsersTableSkeleton() {
  return (
    <div style={{marginTop: '56px'}}>
      <div className={classNames.SkeletonWrapper} aria-hidden="true">
        <div className={classNames.SkeletonHeader}>
          <div className={clsx(classNames.SkeletonHeaderCell, classNames.Skeleton)}></div>
          <div className={clsx(classNames.SkeletonHeaderCell, classNames.Skeleton)}></div>
          <div className={clsx(classNames.SkeletonHeaderCell, classNames.Skeleton)}></div>
        </div>

        {Array.from({length: 10}).map((_, rowIndex) => (
          <div key={rowIndex} className={classNames.SkeletonRow}>
            <div className={classNames.SkeletonUserCell}>
              <div className={clsx(classNames.SkeletonAvatar, classNames.Skeleton)}></div>
              <div
                className={clsx(classNames.SkeletonText, classNames.Skeleton)}
                style={{width: '110px', height: '14px'}}
              ></div>
            </div>

            <div
              className={clsx(classNames.SkeletonText, classNames.Skeleton)}
              style={{width: '150px', height: '14px'}}
            ></div>

            <div
              className={clsx(classNames.SkeletonText, classNames.Skeleton)}
              style={{width: '114px', height: '14px'}}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
