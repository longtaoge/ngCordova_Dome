//
// AppGiraffe Phonegap-Plugin Copyright (c) 2013 AppGiraffe, LLC
//
// AGApplicationPreferences
//
// Author:  Dave Ferrell
// Version: 3.0.1
//
#import <Foundation/Foundation.h>

#import <Cordova/CDVPlugin.h>

@interface AGApplicationPreferences : CDVPlugin 
{

}

-	(void) getSetting:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;
-	(void) setSetting:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;
-	(NSString*) getSettingFromBundle:(NSString*)settingName;


@end
