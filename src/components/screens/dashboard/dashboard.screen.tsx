'use client'

import { FC } from 'react'

import {
  ConfirmedDiagnoses,
  LaboratoryTests,
  NextPacient,
  OverallAppointment,
  PatientsPace,
  RecentQuestions,
  UpcommingAppointments,
} from '@/components/layout'
import { PageLayout } from '@/components/layout/page/page.layout'

import styles from './dashboard.module.scss'

export const Dashboard: FC = () => {
  return (
    <PageLayout title="Basic Doctor Dashboard" className={styles.layout}>
      <NextPacient />
      <LaboratoryTests />
      <OverallAppointment />
      <PatientsPace />
      <RecentQuestions />
      <ConfirmedDiagnoses />
      <UpcommingAppointments />
    </PageLayout>
  )
}
