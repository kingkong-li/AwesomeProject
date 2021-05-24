package com.awesomeproject.kingkongpackage;

import com.awesomeproject.ApplicationHolder;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import javax.annotation.Nonnull;

/**
 * @Description:
 * @Author:
 * @CreateTime:2021/5/24-8:51 AM
 * @changeTime:
 */
public class CommunicationPackage implements ReactPackage {
    @Nonnull
    @Override
    public List<NativeModule> createNativeModules(@Nonnull ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
               new CustomExceptionsManagerModule(ApplicationHolder.getApplication()
                       .getReactNativeHost().getReactInstanceManager().getDevSupportManager())
        );
    }

    @Nonnull
    @Override
    public List<ViewManager> createViewManagers(@Nonnull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
