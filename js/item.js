//=============================================================================
//【ファイル名】
//  item.js
//【アプリ名】
//  商品マスタ
//-----------------------------------------------------------------------------
//  Copyright (c) 2022 AISIC.Inc
//=============================================================================

(() => {
  'use strict';

  // =============================================
  // 定数
  // =============================================

  // =============================================
  // 共通関数
  // =============================================
  // ---------------------------------------------
  // 共通入力画面制御
  // ---------------------------------------------
  const setCommonInputCtrl = record => {
    record.情報検索.disabled = true;
  };  // setCommonInputCtrl

  // =============================================
  // ADD EVENT HANDLER
  // =============================================
  // ---------------------------------------------
  // EVENT:create.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.show'
  ], async event => {
    const record = event.record;

    setCommonInputCtrl(record);

    return event;
  }); // create.show

  // ---------------------------------------------
  // EVENT:create.submit
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.submit'
  ], async event => {
    const record = event.record;

    record.情報検索.value = record.大分類名.value + ' ' + record.中分類名.value + ' ' + record.小分類名.value + ' ' + record.商品名.value;

    return event;
  }); // create.submit

  // ---------------------------------------------
  // EVENT:create.submit.success
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.submit.success'
  ], async event => {
    const record = event.record;

    return event;
  }); // create.submit.success

  // // ---------------------------------------------
  // // [Promise非対応]
  // // EVENT:create.change.<field_code>
  // // ---------------------------------------------
  // kintone.events.on([
  //     'app.record.create.change.<field_code>'
  // ], event => {
  //     const record = event.record;

  //     return event;
  // }); // create.change.<field_code>

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:create.change.大分類名
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.change.大分類名'
  ], event => {
    const record = event.record;

    record.中分類検索.value = record.大分類名.value;

    return event;
  }); // create.change.大分類名

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:create.change.中分類名
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.change.中分類名'
  ], event => {
    const record = event.record;

    record.小分類検索.value = record.大分類名.value + " " + record.中分類名.value;

    return event;
  }); // create.change.中分類名

  // ---------------------------------------------
  // EVENT:edit.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.show', 'app.record.index.edit.show'
  ], async event => {
    const record = event.record;

    setCommonInputCtrl(record);

    return event;
  }); // edit.show

  // ---------------------------------------------
  // EVENT:edit.submit
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.submit', 'app.record.index.edit.submit'
  ], async event => {
    const record = event.record;

    record.情報検索.value = record.大分類名.value + ' ' + record.中分類名.value + ' ' + record.小分類名.value + ' ' + record.商品名.value;

    return event;
  }); // edit.submit

  // ---------------------------------------------
  // EVENT:edit.submit.success
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.submit.success', 'app.record.index.edit.submit.success'
  ], async event => {
    const record = event.record;

    return event;
  });

  // // ---------------------------------------------
  // // [Promise非対応]
  // // EVENT:edit.change.<field_code>
  // // ---------------------------------------------
  // kintone.events.on([
  //     'app.record.edit.change.<field_code>', 'app.record.index.edit.change.<field_code>'
  // ], event => {
  //     const record = event.record;

  //     return event;
  // }); // edit.change.<field_code>

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:edit.change.大分類名
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.change.大分類名', 'app.record.index.edit.change.大分類名'
  ], event => {
    const record = event.record;

    record.中分類検索.value = record.大分類名.value;

    return event;
  }); // edit.change.大分類名

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:edit.change.中分類名
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.change.中分類名', 'app.record.index.edit.change.中分類名'
  ], event => {
    const record = event.record;

    record.小分類検索.value = record.大分類名.value + " " + record.中分類名.value;

    return event;
  }); // edit.change.中分類名

  // ---------------------------------------------
  // EVENT:detail.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.detail.show'
  ], async event => {
    const record = event.record;

    return event;
  }); // detail.show

  // ---------------------------------------------
  // EVENT:delete.submit
  // ---------------------------------------------
  kintone.events.on([
    'app.record.detail.delete.submit', 'app.record.index.delete.submit'
  ], async event => {
    const record = event.record;

    return event;
  }); // delete.submit

  // ---------------------------------------------
  // EVENT:process.proceed
  // ---------------------------------------------
  kintone.events.on([
    'app.record.detail.process.proceed'
  ], async event => {
    const record = event.record;

    return event;
  }); // process.proceed

  // ---------------------------------------------
  // EVENT:index.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.index.show'
  ], async event => {
    const records = event.records;

    return event;
  }); // index.show

  // ---------------------------------------------
  // EVENT:print.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.print.show'
  ], async event => {
    const record = event.record;

    return event;
  }); // print.show

  // ---------------------------------------------
  // EVENT:report.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.report.show'
  ], async event => {
    const record = event.record;

    return event;
  }); // report.show

})();

