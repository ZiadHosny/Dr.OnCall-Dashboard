'use client'
import React from 'react'
import { toast } from 'react-toastify'

export const showSuccess = ({ message }: { message: string }) => {
  toast.success(<span className="font-bold">{message}</span>, {
    theme: localStorage['darkMode'] === 'dark' ? 'dark' : 'light',
    autoClose: 3000,
    closeOnClick: false,
  })
}

export const showError = ({ message }: { message: string }) => {
  toast.error(<span className="font-bold">{message}</span>, {
    theme: localStorage['darkMode'] === 'dark' ? 'dark' : 'light',
    autoClose: 3000,
    closeOnClick: false,
  })
}
