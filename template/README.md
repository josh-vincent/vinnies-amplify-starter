Make sure to change podfile before running yarn run ios

Add In React-native-vector-icons

```

pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'

# Enables Flipper.
  #
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable these next few lines.
  #use_flipper!
  #post_install do |installer|
  #  flipper_post_install(installer)
  #end
end

post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings.delete 'IPHONEOS_DEPLOYMENT_TARGET'
    end
  end
end
```

##Copy AWS credentials to ~/.aws/credentials
##Create amplify project

`amplify init`
