<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<div id="AESEBU" class="InputSepcialOption">
	<input type="hidden" name="InputBody" value="AESEBU"/>
	<div class="InputRuntimeNotSupport">
	<div class="LineSpacing"></div>
	<table>
		<tr>
			<td class="InputColumn0 LabelAlign">
				<span class="TaskLabelText"><s:text name="common.port"/>:</span>
			</td>
			<td class="LabelEndSpacing"><div class="LinePlaceHolder"></div></td>
			<td class="InputColumn2">
				<select name="InputPort" class="TaskContentText DefaultSelect">
					<option value="1" >1</option>
					<option value="2" >2</option>
					<option value="3" >3</option>
					<option value="4" >4</option>
				</select>
				<input type="hidden" name="InputPortDown" value=""/>
			</td>
			<td><div class="LinePlaceHolder"></div></td>
		</tr>
	</table>
	<div class="LineSpacing"></div>
	<div class="ProgramEditor">
		<div class="ProgramItemList">
		<s:include value="/jsp/template/input/ProgramItem.jsp"/>
		</div>
	</div>
	</div>
</div>