import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

test('homepage presents 5–8 verified AI updates with structured source fields', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /AI INFORMATION/);
  assert.match(html, /时间/);
  assert.match(html, /内容/);
  assert.match(html, /背景/);
  assert.match(html, /渠道/);
  assert.ok((html.match(/class="news-card/g) ?? []).length >= 5);
  assert.ok((html.match(/class="news-card/g) ?? []).length <= 8);
  assert.ok((html.match(/data-verified="true"/g) ?? []).length >= 5);
  assert.match(html, /https:\/\/openai\.com\//);
  assert.match(html, /https:\/\/blog\.google\//);
  assert.match(html, /https:\/\/www\.anthropic\.com\//);
  assert.match(html, /https:\/\/blogs\.microsoft\.com\//);
});
