"use client"
import { addNotification } from '@/redux/notification/notificationSlice';
import { AppDispatch } from '@/redux/store';
import socket from '@/utils/socket';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Notification: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    socket.on('notification', (data: string) => {
      dispatch(addNotification(data));
    });

    return () => {
      socket.off('notification');
    };
  }, [dispatch]);

  return null;
};

export default Notification;
