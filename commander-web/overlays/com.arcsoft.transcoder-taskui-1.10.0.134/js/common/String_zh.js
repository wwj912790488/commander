var g_string = {};

g_string.font = {};
g_string.font.FangSong = "仿宋";
g_string.font.Arial = "Arial";
g_string.font.SegoeUI = "Segoe UI";
g_string.font.KaiTi = "楷体";
g_string.font.SimSun = "宋体";
g_string.font.SimHei = "黑体";
g_string.font.MSYH = "微软雅黑";

g_string.mosaic = {};
g_string.mosaic.type_mosaic="颗粒";
g_string.mosaic.type_blur="模糊";
g_string.mosaic.type_erase="擦除";

var str_common = new Object();
str_common.close = "关闭";
str_common.on ="开";
str_common.off ="关";
str_common.auto ="自动";
str_common.saveAsProfile = "另存为任务模板";
str_common.saveAsPreset = "另存为流模板";
str_common.save_as_scene = "另存为场景";
str_common.importProfile = "导入任务模板";
str_common.importPreset = "导入流模板";
str_common.import_scene = "导入场景";
str_common.selectInputPath = "浏览路径";
str_common.selectOutputPath = "浏览路径";
str_common.newOutputFromPreset = "从流模板创建";
str_common.categoryList = "分组列表";
str_common.saveSuccessed ="保存成功";
str_common.saveFailed ="保存失败";
str_common.none="无";
str_common.macro="宏";
str_common.material="素材";
str_common.content_packaging="图文包装";
str_common.apply_success ="应用成功";
str_common.apply_failed ="应用失败";
str_common.back_task_manager = "返回任务管理";
str_common.back_profile_manager = "返回模板管理";

var str_task = new Object();
str_task.bestQuality = "最高质量";
str_task.goodQuality = "高质量";
str_task.balance = "均衡";
str_task.fast = "快速";
str_task.fastest = "最快速";
str_task.custom = "自定义";
str_task.load_task_failed="读取任务失败";
str_task.task="任务";
str_task.edit_task="编辑任务";
str_task.new_task="新建任务";
str_task.runtime_setting="动态设置";

var str_profile = new Object();
str_profile.edit_profile="编辑模板";
str_profile.new_profile="新建模板";

var str_input = new Object();
str_input.needRightPath = "需要正确的路径";
str_input.pathLimitSymbols = "文件夹中不能包含/:*?\"<>|";
str_input.fileLimitSymbols = "文件名中不能包含\\\/:*?\"<>|";
str_input.aes_ebu_note="AES/EBU作为输入时，视频设定不起效果";
str_input.input_sdp="输入SDP文件";
str_input.filltype_video="视频";
str_input.filltype_audio="音频";
str_input.filltype_video_audio="音视频";
str_input.port_select="端口选择";

var str_stream = new Object();
str_stream.linkedNone = "无关联";
str_stream.stream = "流参数";
str_stream.stream_is_used = "流已被使用";

var str_advertisement = new Object();
str_advertisement.reserveHead = "保头去尾";
str_advertisement.reserveTail = "保尾去头";

var str_output = new Object();
str_output.appleLive = "Apple Live";
str_output.fileArchive = "归档文件";
str_output.flash = "Flash";
str_output.udp = "UDP";
str_output.rtp = "RTP";
str_output.http = "HTTP";
str_output.mss = "MS Streaming";
str_output.asi = "ASI";
str_output.sdi = "SDI";
str_output.logoFileViewTitle = "请选择图片";
str_output.subtitleFileViewTitle = "请选择字幕文件";
str_output.AdvertisementFileViewTitle = "请选择广告文件";
str_output.videoBreviary = "{0} {1} {2} {3} {4}";
str_output.audioBreviary = "{0} {1} {2} {3}";
str_output.source = "跟随源";
str_output.custom = "自定义";
str_output.frame = "帧";
str_output.field = "场";
str_output.field_auto = "场AUTO";
str_output.supportVideoAudio ="视频[{0}] | 音频[{1}]";
str_output.newDefault ="新建流";
str_output.importFromPreset ="导入流模板";
str_output.eth_default="由系统路由选择网口";
str_output.eth_auto="使用流量较少的网口";
str_output.smart_border="智能黑边";
str_output.smart_clipping="自动裁剪";
str_output.linear_stretch="线性拉伸";
str_output.fit_width="按宽度缩放";
str_output.fit_height="按高度缩放";
str_output.segment_type_normal="普通";
str_output.segment_type_24h_record="24小时收录";
str_output.segment_type_epg_file="EPG收录";
str_output.outputgroup_setting="输出设定";
str_output.playlist_name_mode0="单列表名";
str_output.playlist_name_mode1="多列表名";
str_output.distribute_http_server="发布到HTTP服务器";
str_output.distribute_local="发布到本地";
str_output.distribute_point="发布点";
str_output.hls_reserve_segment="保留切片";
str_output.hls_delete_expired="删除过期切片";
str_output.hls_vod_mode="点播切片";

var str_warning = new Object();
str_warning.fileExtension = "必须是{0}文件";
str_warning.needFloat = "需要输入浮点数";
str_warning.needInteger = "需要输入整数";
str_warning.outOfRange = "超出范围：{0}~{1}";
str_warning.outOfMaxRange = "超出最大值：{0}";
str_warning.outOfMinRange = "超出最小值：{0}";
str_warning.coordinatesInRange ="坐标需要在({0}, {1})范围内";
str_warning.invalidIp ="无效的IP地址";
str_warning.invalidColor = "无效的颜色值，请填写6位16进制数";
str_warning.outOfWidth = "超出宽度范围{0}";
str_warning.outOfHeight = "超出高度范围{0}";
str_warning.needHmsf = "需要时间格式为：时:分:秒:帧";
str_warning.needHmsm = "需要时间格式为：时:分:秒:毫秒";
str_warning.trimError = "区域裁剪宽度或者高度超出范围";
str_warning.streamEmpty = "空流";
str_warning.sameLogo = "不能选用同一个台标";
str_warning.preview_subtitle = "预览只支持.srt, .ssa, .ass文件";
str_warning.outOfDuration = "超出播放时间";
str_warning.mediaInfoLoading="正在获取媒体信息，请稍候……";
str_warning.subtitle_out_of_range="字幕超出视频区域";
str_warning.save_task_with_media_info_loading="正在读取媒体信息。确定保存吗?";
str_warning.copy_success="复制成功";
str_warning.copy_failed="复制失败";
str_warning.load_profile_failed="模板读取失败";
str_warning.content_packaging_number_not_match="图文包装个数不匹配";
str_warning.select_box_out_of_resolution="坐标超出视频宽高";
str_warning.ts_total_bitrate_overflow="TS总码率存在下溢风险";

var str_preview = new Object();
str_preview.protocal = "协议类型与地址不匹配";
str_preview.clip_unsupport = "不支持该媒体";

var str_audio = new Object();
str_audio.channelProcessingNone = "无";
str_audio.channelProcessingLeft = "保留源左声道";
str_audio.channelProcessingRight = "保留源右声道";
str_audio.channelProcessingMix = "混合源声道";
str_audio.volume_mode_source = "跟随源";
str_audio.volume_mode_boost = "音量增益";
str_audio.volume_mode_balance = "音量平衡";
str_audio.balance_level_low = "低";
str_audio.balance_level_medium = "中";
str_audio.balance_level_high = "高";
str_audio.add_input_audio = "增加输入音轨";
str_audio.audio_process_default="默认";
str_audio.audio_process_split="全音轨拆分";
str_audio.audio_process_merge="全音轨合并";
str_audio.audio_process_follow_source="沿用源音轨";
str_audio.encoding_mode_video="视频";
str_audio.encoding_mode_music="音乐";

var str_video = new Object();
str_video.antiShakingOn = "延时优先";
str_video.antiShakingOnDelay = "平稳优先";
str_video.passThrough = "透传";
str_video.top_field_first = "顶场优先";
str_video.bottom_field_first = "底场优先";
str_video.deinterlacealg_quality = "质量优先";
str_video.deinterlacealg_speed = "速度优先";
str_video.resizealg_lanczos = "质量优先";
str_video.resizealg_bilinear = "速度优先";
str_video.scd_disabled = "关闭";
str_video.scd_add_idr = "插IDR帧";
str_video.scd_add_i = "插I帧";
str_video.frame_rate_mode_fixed = "固定";
str_video.frame_rate_mode_up_source = "大于此帧率跟随源";
str_video.frame_rate_mode_down_source = "小于此帧率跟随源";
str_video.denoise_method_0 = "速度优先";
str_video.denoise_method_1 = "质量优先";
str_video.interpolate_0 = "拉伸";
str_video.interpolate_1 = "固定";
str_video.interpolate_2 = "修改帧率信息";
str_video.resolution = "分辨率";
str_video.aspect_ratio = "显示宽高比";
str_video.gpu_fastest="极速模式";
str_video.fast="快速模式";
str_video.faster="较快";
str_video.balance="普通模式";
str_video.high_quality="高质量";
str_video.best_quality="高质量模式";
str_video.mostbest_quality="最高质量模式";
str_video.mostbestplus_quality="最高质量模式+";
str_video.gop_type_frame="帧";
str_video.gop_type_ms="毫秒";

var str_watchfolder = new Object();
str_watchfolder.filePath = "CIFS/NFS文件夹";
str_watchfolder.ftpPath = "FTP文件夹";
str_watchfolder.type = {};
str_watchfolder.type.common = "默认方式";
str_watchfolder.type.teda = "天津泰达";

var str_image_grabbing = {};
str_image_grabbing.black_border="加黑边";
str_image_grabbing.keep_aspect_ratio="保持宽高比";
str_image_grabbing.stretch="拉伸";
str_image_grabbing.normal="普通模式";
str_image_grabbing.skip_count="个数不限";
str_image_grabbing.skip_interval="间隔等分";

var str_motion_icon = {};
str_motion_icon.title="动图";
str_motion_icon.permanent="永久";
str_motion_icon.dynamic="动态";
str_motion_icon.loop="循环";
str_motion_icon.play_once="单次";
str_motion_icon.keep_last_frame="单次保留尾帧";

var str_water_marking = {};
str_water_marking.watermark="水印";
str_water_marking.signature="签名";

var str_dynamic_text = {};
str_dynamic_text.title="动文";
str_dynamic_text.animation_static="静态";
str_dynamic_text.animation_scroll="滚动";
str_dynamic_text.scroll_from_left="从左至右";
str_dynamic_text.scroll_from_right="从右至左";
str_dynamic_text.scroll_from_top="从上至下";
str_dynamic_text.scroll_from_bottom="从下至上";
str_dynamic_text.fast="快";
str_dynamic_text.fastest="最快";
str_dynamic_text.slow="慢";
str_dynamic_text.slowest="最慢";
str_dynamic_text.moreslowest="最慢+";
str_dynamic_text.normal="一般";

var str_macro = {};
str_macro.yyyy="${yyyy} - 四位数年";
str_macro.MM="${MM} - 两位数月";
str_macro.dd="${dd} - 两位数日";
str_macro.HH="${HH} - 两位数时";
str_macro.mm="${mm} - 两位数分";
str_macro.ss="${ss} - 两位数秒";
str_macro.date="${DATE} - 'yyyy-MM-dd'任务开的始年月日";
str_macro.time="${TIME} - 'HH-mm-ss'任务开的始时分秒";
str_macro.year="${YEAR} - 任务开始时的四位数年";
str_macro.month="${MONTH} - 任务开始时的两位数月";
str_macro.day="${DAY} - 任务开始时两位数日";
str_macro.filename="${FILENAME} - 源文件名";
str_macro.filename_pinyin="${FILENAME_PINYIN} - 源文件名(拼音)";
str_macro.program="${PROGRAM} - 节目名";
str_macro.filepath="${FILEPATH} - 源路径";
str_macro.last_folder="${LASTFOLDER} - 源中最后一段路径";
str_macro.width="${WIDTH} - 输出视频宽度";
str_macro.height="${HEIGHT} - 输出视频高度";
str_macro.bitrate="${BITRATE} - 输出视频码率";
str_macro.audio_encoder="${AUDIOENCODER} - 输出音频编码";
str_macro.video_encoder="${VIDEOENCODER} - 输出视频编码";
str_macro.last_output_folder="${LASTOUTPUTFOLDER} - 截取输出路径最后一段";
str_macro.task_name="${TASKNAME} - 任务名";
str_macro.id="${id} - 流序号";
str_macro.seq="${seq} - 切片序号";
str_macro.starttime="${starttime} - 转码开始时间";
str_macro.curtime="${curtime} - 切片当前时间";
str_macro.bitrate_hls="${bitrate} - 流码率";
str_macro.videobitrate="${videobitrate} - 视频码率";
