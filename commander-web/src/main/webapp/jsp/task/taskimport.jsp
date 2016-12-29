<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/jsp/include/jsonheader.jsp"%>

<div id="dialog_import_task">

	<div class="template_title">
		<s:text name="title.importTasks"/>
	</div>
	<div class="template_content " parent_align="center">
		<div id="import_task_detail">
			<table style="width: 100%; text-align: left">
			<tr>
				<td colspan="2" id="fileTitle"><s:text name="title.import.select.file"/></td>
			</tr>
			<tr>
				<td>
					<input type="file" id="xmlFile" name="xmlFile"/>
				</td>
			</tr>
			</table>
		</div>
	</div>
	<div class="template_button">
		<div class="div_space"></div>
		<div class="div_buttons">
			<table align="center">
			<tr>
				<td><input type="button" id="btnOk" value="<s:text name='msg.ok'/>" /></td>
				<td class="td_space"></td>
				<td><input type="button"id="btnCancel" value="<s:text name='msg.cancel'/>" /></td>
			<tr>
			</table>
		</div>
	</div>
</div>
