/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.awesomeproject.kingkongpackage;

import android.util.Log;

import com.facebook.common.logging.FLog;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.common.JavascriptException;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.util.JSStackTrace;

/**
 * 自定义错误处理module
 * @author jingang
 */
@ReactModule(name = CustomExceptionsManagerModule.NAME)
public class CustomExceptionsManagerModule extends BaseJavaModule {

  public static final String NAME = "CustomExceptionsModule";

  private final DevSupportManager mDevSupportManager;

  public CustomExceptionsManagerModule(DevSupportManager devSupportManager) {
    mDevSupportManager = devSupportManager;
  }

  @Override
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void reportFatalException(String title, ReadableArray details, int exceptionId) {
    showOrThrowError(title, details, exceptionId);
  }

  @ReactMethod
  public void reportSoftException(String title, ReadableArray details, int exceptionId) {
    if (mDevSupportManager.getDevSupportEnabled()) {
      mDevSupportManager.showNewJSError(title, details, exceptionId);
    } else {
      FLog.e(ReactConstants.TAG, JSStackTrace.format(title, details));
    }
  }

  private void showOrThrowError(String title, ReadableArray details, int exceptionId) {
    Log.e(NAME,"title="+title);
    Log.e(NAME,"details="+details.toString());
    if (mDevSupportManager.getDevSupportEnabled()) {
      mDevSupportManager.showNewJSError(title, details, exceptionId);
    } else {
      // 可以自定义release错误处理
      throw new JavascriptException(format(title, details));
    }
  }

  public static String format(String message, ReadableArray stack) {
    StringBuilder stringBuilder = new StringBuilder(message).append(", stack:\n");
    for (int i = 0; i < stack.size(); i++) {
      ReadableMap frame = stack.getMap(i);
      stringBuilder
              .append(frame.getString("methodName"))
              .append("@")
              .append(frame.getString("file"));

      if (frame.hasKey("lineNumber") &&
              !frame.isNull("lineNumber") &&
              frame.getType("lineNumber") == ReadableType.Number) {
        stringBuilder
                .append(frame.getInt("lineNumber"));
      } else {
        stringBuilder
                .append(-1);
      }

      if (frame.hasKey("column") &&
              !frame.isNull("column") &&
              frame.getType("column") == ReadableType.Number) {
        stringBuilder
                .append(":")
                .append(frame.getInt("column"));
      }

      stringBuilder.append("\n");
    }
    return stringBuilder.toString();
  }

  @ReactMethod
  public void updateExceptionMessage(String title, ReadableArray details, int exceptionId) {
    if (mDevSupportManager.getDevSupportEnabled()) {
      mDevSupportManager.updateJSError(title, details, exceptionId);
    }
  }

  @ReactMethod
  public void dismissRedbox() {
    if (mDevSupportManager.getDevSupportEnabled()) {
      mDevSupportManager.hideRedboxDialog();
    }
  }
}
