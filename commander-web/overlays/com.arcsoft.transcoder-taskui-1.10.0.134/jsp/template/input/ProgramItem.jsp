<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<div class="ProgramItem">
	<div class="ProgramLine">
		<!-- 1 -->
		<div class="LineSpacing"></div>
		<table>
			<tr>
				<td class="ProgramColumn1 LabelAlign">
					<span class="TaskLabelText"><s:text name="input.program"/>:</span>
				</td>
				<td class="LabelEndSpacing"><div class="LinePlaceHolder"></div></td>
				<td class="ProgramColumn2">
					<select name="ProgramId" class="TaskContentText DefaultSelect">
					</select>
					<input type="hidden" name="ProgramIdDown" value="<s:property value="[0].programId"/>"/>
				</td>
				<td class="ProgramColumn1 LabelAlign">
					<span class="TaskLabelText"><s:text name="input.audio_track"/>:</span>
				</td>
				<td class="LabelEndSpacing"><div class="LinePlaceHolder"></div></td>
				<td class="ProgramColumn2">
					<select name="AudioTrackId" class="TaskContentText DefaultSelect">
					</select>
					<input type="hidden" name="AudioTrackIdDown" value="<s:property value="[0].audioTrackId"/>"/>
				</td>
				<td class="ProgramColumn1 LabelAlign">
					<span class="TaskLabelText"><s:text name="input.subtitle"/>:</span>
				</td>
				<td class="LabelEndSpacing"><div class="LinePlaceHolder"></div></td>
				<td class="ProgramColumn2">
					<select name="SubtitleId" class="TaskContentText DefaultSelect">
					</select>
					<input type="hidden" name="SubtitleIdDown" value="<s:property value="[0].subtitleId"/>"/>
				</td>
				<td class="ProgramColumn1 LabelAlign ProgramAngleItem">
					<span class="TaskLabelText"><s:text name="input.angle"/>:</span>
				</td>
				<td class="LabelEndSpacing ProgramAngleItem"><div class="LinePlaceHolder"></div></td>
				<td class="ProgramColumn2 ProgramAngleItem">
					<select name="AngleId" class="TaskContentText DefaultSelect">
					</select>
					<input type="hidden" name="AngleIdDown" value="<s:property value="[0].angleId"/>"/>
				</td>
				<td><div class="LinePlaceHolder"></div></td>
			</tr>
		</table>
		<div class="LineSpacing"></div>
	</div>
	<!-- 2 -->
	<div class="LineSpacing ProgramAudioChannelItem"></div>
	<table class="ProgramAudioChannelItem">
			<tr>
				<td class="ProgramColumn1 LabelAlign">
					<span class="TaskLabelText"><s:text name="audio.channel"/>:</span>
				</td>
				<td class="LabelEndSpacing"><div class="LinePlaceHolder"></div></td>
				<td class="ProgramColumn2">
					<select name="AudioChannelId" class="TaskContentText DefaultSelect">
						<option value="-1"><s:text name="simhd.scene.default"/></option>
					</select>
					<input type="hidden" name="AudioChannelIdDown" value="<s:property value="[0].audioChannelId"/>"/>
				</td>
				<td><div class="LinePlaceHolder"></div></td>
			</tr>
		</table>
	<div class="LineSpacing ProgramAudioChannelItem"></div>
	<!-- 3 -->
	<div class="LineSpacing"></div>
	<table >
		<tr>
			<td class="ProgramColumn1 LabelAlign">
				<span class="TaskLabelText"><s:text name="input.media_info"/>:</span>
			</td>
			<td class="LabelEndSpacing"><div class="LinePlaceHolder"></div></td>
			<td>
				<span class="TaskContentText InputMediaInfo"></span>
			</td>
			<td><div class="LinePlaceHolder"></div></td>
			<td style="width: 30px">
				<div class="ProgramMoveUp MouseHover ICON_MoveUp"></div>
			</td>
			<td style="width: 30px">
				<div class="ProgramMoveDown MouseHover ICON_MoveDown"></div>
			</td>
			<td style="width: 30px">
				<div class="ICON_Play ProgramPreviewTrigger MouseHover"></div>
			</td>
			<td style="width: 30px">
				<div class="DeleteProgramItemTrigger MouseHover ICON_Delete"></div>
			</td>
		</tr>
	</table>
	<div class="LineSpacing"></div>
</div>
