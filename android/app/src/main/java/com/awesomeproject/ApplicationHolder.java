package com.awesomeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;

/**
 * @Description:
 * @Author:
 * @CreateTime:2021/5/24-9:42 AM
 * @changeTime:
 */
public class ApplicationHolder {
    private static ReactApplication sApplication;
    public static void setApplication(ReactApplication application){
        sApplication=application;
    }
    public static ReactApplication getApplication(){
        return sApplication;
    }
}
